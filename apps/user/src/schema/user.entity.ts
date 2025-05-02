import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true})
    clerkUserId: string;
    
    @Column()
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({default: 'user'})
    role:string;

    @Column({ default: false })
    isVerified: boolean;
}