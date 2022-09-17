import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('produtos') 
export default class Produtos {
    @PrimaryGeneratedColumn('increment')
    id_produto: number;

    @Column()
    name_produto: string;

    @Column()
    unidade_medida: string;

    @Column()
    images_produtos: string;

}