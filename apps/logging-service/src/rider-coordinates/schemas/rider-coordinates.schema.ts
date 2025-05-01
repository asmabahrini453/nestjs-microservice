import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RiderCoordinate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  riderId: string;

  @Column('float')
  lat: number;  // latitude

  @Column('float')
  lng: number;  // longitude
}
