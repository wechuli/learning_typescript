import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

export interface IUser {
  name: string;
  email: string;
}

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
