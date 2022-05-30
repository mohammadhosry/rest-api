import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: BigInteger): Promise<User> {
        return this.usersService.findOne(id);
    }

    @ApiOperation({ summary: 'Create user' })
    @Post()
    async store(@Body() body: CreateUserDto): Promise<User> {
        return this.usersService.store(body);
    }
}
