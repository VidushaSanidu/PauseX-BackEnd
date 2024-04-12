import { User } from './user.entity';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity('artists')
export class Artist {
  @PrimaryGeneratedColumn()
  id: number;
}
