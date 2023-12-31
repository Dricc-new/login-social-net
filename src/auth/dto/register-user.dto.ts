import { IsNotEmpty, IsString, Length, IsEmail} from "class-validator"

export class RegisterUserDTO {
    @IsNotEmpty()
    @IsString()
    @Length(2, 20)
    name: string

    @IsNotEmpty()
    @IsEmail() 
    @Length(2, 100)
    email: string

    @IsNotEmpty()
    @IsString()
    @Length(2, 100)
    password: string

    // @IsNotEmpty()
    // @IsString()
    // @Length(2, 100)
    // @Match('password')
    // checkPassword: string
}