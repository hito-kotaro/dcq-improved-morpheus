import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1671370006211 implements MigrationInterface {
    name = 'createTables1671370006211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "quests" ("id" character varying NOT NULL, "title" character varying NOT NULL, "description" character varying, "example" character varying, "reward" integer NOT NULL DEFAULT '0', "created_at" TIMESTAMP(0) NOT NULL DEFAULT now(), "updated_at" TIMESTAMP(0) NOT NULL DEFAULT now(), "user_id" character varying, CONSTRAINT "PK_a037497017b64f530fe09c75364" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "quests" ADD CONSTRAINT "FK_d2090cad4ae54ac68a622b2fd94" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quests" DROP CONSTRAINT "FK_d2090cad4ae54ac68a622b2fd94"`);
        await queryRunner.query(`DROP TABLE "quests"`);
    }

}
