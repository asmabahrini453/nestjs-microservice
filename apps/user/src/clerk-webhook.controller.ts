import { Controller, Post, Headers, Req, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import * as crypto from 'crypto';
import { Request } from 'express';

@Controller('webhooks/clerk')
export class ClerkWebhookController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async handleEvent(
    @Headers('clerk-signature') signature: string,
    @Req() req: Request, // Use raw request for signature verification
  ) {
    const secret = process.env.CLERK_WEBHOOK_SECRET;

    if (!secret) {
      throw new BadRequestException('Webhook secret is missing');
    }

    // Ensure raw body is available
    const rawBody = await this.streamToBuffer(req);

    // Manually verify the signature
    const computedSignature = crypto
      .createHmac('sha256', secret)
      .update(rawBody)
      .digest('hex');

    // Compare the computed signature with the signature from Clerk
    if (computedSignature !== signature) {
      console.error('Signature verification failed');
      throw new BadRequestException('Invalid signature');
    }

    let event;
    try {
      // Parse the body to extract the event (Clerk webhook payload)
      event = JSON.parse(rawBody.toString());
    } catch (err) {
      throw new BadRequestException('Invalid webhook payload');
    }

    const { type, data } = event;

    // Handle events
    if (type === 'user.created' || type === 'user.updated') {
        const userData = {
          clerkUserId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          role: data.public_metadata.role || 'user',
        };
      
        const existingUser = await this.userService.getUserByClerkId(data.id);
      
        if (existingUser) {
          await this.userService.updateUser(existingUser.id, userData); // Use internal DB `id`, not Clerk's
        } else {
          await this.userService.createUser(userData);
        }
      }
      

    return { message: 'ok' };
  }

  // Helper function to convert a Readable stream to a Buffer
  private async streamToBuffer(req: Request): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const chunks: Uint8Array[] = [];
      req.on('data', (chunk) => {
        chunks.push(chunk);
      });
      req.on('end', () => {
        resolve(Buffer.concat(chunks));
      });
      req.on('error', (err) => {
        reject(err);
      });
    });
  }
}
