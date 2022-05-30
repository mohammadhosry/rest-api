import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty({ message: 'First name can\'t be empty' })
    first_name: string;

    @IsNotEmpty({ message: 'Last name can\'t be empty' })
    last_name: string;

    @IsNotEmpty({ message: 'Username can\'t be empty' })
    username: string;

    @IsEmail({}, { message: 'Email must be a valid email address' })
    email: string;

    @IsNotEmpty()
    password: string;
}