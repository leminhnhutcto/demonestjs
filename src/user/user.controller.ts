import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }


    @Get()
    findAll(): Promise<UserEntity[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    get(@Param() params) {
        return this.userService.findOne(params.id);
    }

    /**
     * @description Create User
     * @param user UserEntity
     * @returns 
     */
    @Post()
    create(@Body() user: UserEntity) {
        return this.userService.createUser(user);
    }

    /**
     * @description update user
     * @param user UserEntity
     * @returns 
     */
    @Put(':id')
    update(@Body() user: UserEntity) {
        return this.userService.updateUser(user);
    }

    /**
     * @description Delete User by id
     * @param id user 
     * @returns 
     */
    @Delete(':id')
    deleteUser(@Param() params) {
        return this.userService.deleteUser(params.id);
    }

}
