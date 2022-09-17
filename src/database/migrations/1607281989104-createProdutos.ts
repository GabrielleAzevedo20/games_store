import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProdutos1607281989104 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'produtos',
            columns: [
                {
                    name: 'id_produto',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name_produto',
                    type: 'varchar',
                },
                {
                    name: 'unidade_medida',
                    type: 'varchar',
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('produtos')
    }

}
