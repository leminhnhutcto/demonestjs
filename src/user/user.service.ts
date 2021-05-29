import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult} from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepo : Repository<UserEntity>,
    ){}

    async findAll(): Promise<UserEntity[]> {
        return await this.userRepo.find();
    }

    async findOne(id:number):Promise<UserEntity> {
        return await this.userRepo.findOne(id);
    }


    /**
     * @description create User
     * @param user UserEntity
     * @returns Promise UserEntity
     */
    async createUser(user:UserEntity): Promise<UserEntity>{
        return await this.userRepo.save(user);
    }

    /**
     * @description update info User
     * @param id of user
     * @param user UserEntity 
     * @returns Promise UserEntity
     */

    async updateUser(user:UserEntity):Promise<UpdateResult>{
        return await this.userRepo.update(user.id,user);
    }

    /**
     * @description delete User by id
     * @param id of user
     */
    async deleteUser(id):Promise<DeleteResult>{
        return await this.userRepo.delete(id);
    }


}
