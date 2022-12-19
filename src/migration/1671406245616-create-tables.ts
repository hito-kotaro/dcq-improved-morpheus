import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1671406245616 implements MigrationInterface {
    name = 'createTables1671406245616'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "first_name" character varying, "last_name" character varying, "point" integer NOT NULL DEFAULT '0', "image" character varying, "visit" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP(0) NOT NULL DEFAULT now(), "updated_at" TIMESTAMP(0) NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "quests" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying, "example" character varying, "reward" integer NOT NULL DEFAULT '0', "created_at" TIMESTAMP(0) NOT NULL DEFAULT now(), "updated_at" TIMESTAMP(0) NOT NULL DEFAULT now(), "owner_id" character varying, CONSTRAINT "PK_a037497017b64f530fe09c75364" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "quests" ADD CONSTRAINT "FK_5abb328f345c8a8ffcb36ebcccc" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quests" DROP CONSTRAINT "FK_5abb328f345c8a8ffcb36ebcccc"`);
        await queryRunner.query(`DROP TABLE "quests"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
