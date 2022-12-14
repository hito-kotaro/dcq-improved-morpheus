import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1671000182070 implements MigrationInterface {
    name = 'createTables1671000182070'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "point" integer NOT NULL, "image" character varying NOT NULL, "visit" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP(0) NOT NULL DEFAULT now(), "updated_at" TIMESTAMP(0) NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
