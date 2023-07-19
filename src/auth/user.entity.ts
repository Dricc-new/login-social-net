import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 20, unique: true })
    name: string

    @Column({ length: 100, unique: true })
    email: string

    @Column({ length: 100 })
    password: string

    @Column({ type: 'boolean', default: false, name: 'email_verified' })
    emailVerified: boolean

    @Column({ type: 'boolean', default: true })
    active: boolean

    @Column({ type: 'uuid', unique: true, name: 'activation_token' })
    activationToken: boolean

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

    @UpdateDateColumn({ name: 'update_at' })
    updatedAt: Date
}