import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDTO } from './dto/register-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('/register')
    async register(@Body() user: RegisterUserDTO) {
        return await this.authService.registerUser(user)
            
    }
}
