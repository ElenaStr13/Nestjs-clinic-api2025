import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity()
export class Token {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accessToken: string;

  @Column()
  refreshToken: string;

  @Column()
  accessTokenExpiresAt: Date;

  @Column()
  refreshTokenExpiresAt: Date;

  @Column({ default: false })
  isBlocked: boolean;

  @Column()
  jti: string;

  @ManyToOne(() => UserEntity, (user) => user.tokens)
  user: UserEntity;
}
