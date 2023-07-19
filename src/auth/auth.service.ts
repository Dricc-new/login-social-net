import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { RegisterUserDTO } from './dto/register-user.dto';
import { EncoderService } from './encoder.service';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>,
        private encoderService: EncoderService) { }

    async registerUser(user: RegisterUserDTO) {
        const { name, email, password } = user;
        const hashedPassword = await this.encoderService.passwordEncoder(password)
        const NewUser = this.userRepository.create({ name, email, password: hashedPassword })
        return this.userRepository.save(NewUser).then((user) => {
            return user
        }).catch((e) => {
            if (e.code === 'ER_DUP_ENTRY') {
                throw new ConflictException('The username or email already exists in our database.')
            }
            throw new InternalServerErrorException()
        })
    }
}
