import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface ITask {
  title: string;
  description: string;
  start_date: Date;
  completion_date: Date;
}

@Entity()
export class Task implements ITask {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  start_date: Date;

  @Column()
  completion_date: Date;
}
