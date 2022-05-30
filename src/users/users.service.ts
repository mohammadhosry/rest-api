import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}
    
    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async findOne(id): Promise<User> {
        return this.usersRepository.findOne(id);
    }

    async store(body): Promise<User> {
        return this.usersRepository.save({
            ...body,
            password: await bcrypt.hash(body.password, 10)
        });
    }
}
