import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPedidos1607282000143 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'pedidos',
            columns: [
                {
                    
                    name: 'id_pedidos',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'data_emissao',
                    type: 'varchar',
                },
                {
                    name: 'quantidade',
                    type: 'number',
                },
                {
                    name: 'valor_unitario',
                    type: 'number'
                },
                {
                    name: 'id_fornecedor',
                    type: 'number',
                },
                {
                    name: 'id_produtos',
                    type: 'number',
                },
            ],
            foreignKeys: [
                {
                    name: 'id_fornecedor',
                    columnNames: ['id_fornecedor'],
                    referencedTableName: 'fornecedores',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
                {
                    name: 'id_produtos',
                    columnNames: ['id_produtos'],
                    referencedTableName: 'produtos',
                    referencedColumnNames: ['id_produto'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ] 
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pedidos')
    }

}
