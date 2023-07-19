import { IsNotEmpty, IsUUID } from "class-validator"

export class ActivateUser{
    @IsNotEmpty()
    @IsUUID('4')
    id: string
    
    @IsNotEmpty()
    @IsUUID('4')
    code: string
}