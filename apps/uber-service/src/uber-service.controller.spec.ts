import { Test, TestingModule } from '@nestjs/testing';
import { UberServiceController } from './uber-service.controller';
import { UberServiceService } from './uber-service.service';

describe('UberServiceController', () => {
  let uberServiceController: UberServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UberServiceController],
      providers: [UberServiceService],
    }).compile();

    uberServiceController = app.get<UberServiceController>(UberServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(uberServiceController.getHello()).toBe('Hello World!');
    });
  });
});
