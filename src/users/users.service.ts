import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) {}
    
    async findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    async store(body): Promise<User> {
        return this.userModel.create({
            // first_name: 'Mohammad',
            // last_name: 'Agbareya',
            // email: 'mohammad@yna.co.il',
            // username: 'mohammadyna',
            // password: await bcrypt.hash('password', 10),
            ...body,
            password: await bcrypt.hash(body.password, 10)
        })
    }
}
