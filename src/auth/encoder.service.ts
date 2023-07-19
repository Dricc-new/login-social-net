import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'

@Injectable()
export class EncoderService {
    async passwordEncoder(password: string): Promise<string> {
        const salt = await bcrypt.genSalt()
        return await bcrypt.hash(password, salt)
    }
}