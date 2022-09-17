import { Entity, Column, ManyToMany, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import Fornecedores from './Fornecedores';
import Produtos from './Produtos';

@Entity('pedidos') 
export default class Pedidos {
    @PrimaryGeneratedColumn('increment')
    id_pedidos: number;

    @Column()
    data_emissao: string;

    @Column()
    quantidade: number;

    @Column()
    valor_unitario: number;

    @Column()
    id_fornecedor: number;

    @Column()
    id_produtos: number;

    @ManyToMany(() => Fornecedores, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'fornecedor_id' })
    fornecedores: Fornecedores

    @ManyToMany(() => Produtos, {
        cascade: ['insert', "update"]
    })
    @JoinColumn({ name: 'id_produtos'})
    produtos: Produtos
}