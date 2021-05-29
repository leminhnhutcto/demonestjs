import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:20})
    userName:string;

    @Column({length:50})
    fullName:string;

    @Column()   
    active:boolean;
}
