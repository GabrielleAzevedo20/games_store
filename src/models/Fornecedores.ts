import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('fornecedores')
export default class Fornecedores {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    telefone: string;

    @Column()
    email: string;
}