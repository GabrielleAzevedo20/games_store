import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class ImagesProdutos1607282014750 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('produtos', new TableColumn({
            name: 'images_produtos',
            type: 'varchar',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('produtos', 'images_produtos')
    }

}
