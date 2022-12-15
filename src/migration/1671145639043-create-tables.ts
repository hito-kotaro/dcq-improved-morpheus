import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1671145639043 implements MigrationInterface {
    name = 'createTables1671145639043'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "first_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "last_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "point" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "image" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "image" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "point" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "last_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "first_name" SET NOT NULL`);
    }

}
