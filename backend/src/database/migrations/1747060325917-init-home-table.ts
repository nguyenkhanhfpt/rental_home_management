import { MigrationInterface, QueryRunner } from "typeorm";

export class InitHomeTable1747060325917 implements MigrationInterface {
    name = 'InitHomeTable1747060325917'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."homes_status_enum" AS ENUM('active', 'inactive', 'building', 'fixing')`);
        await queryRunner.query(`CREATE TABLE "homes" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "short_name" character varying NOT NULL, "address" text NOT NULL, "user_id" integer NOT NULL, "status" "public"."homes_status_enum" NOT NULL DEFAULT 'active', "userId" integer, CONSTRAINT "PK_a85aa6f2e56424fc745effdd5f2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "homes" ADD CONSTRAINT "FK_0418051bcd787a0e9ecaafcd0bd" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "homes" DROP CONSTRAINT "FK_0418051bcd787a0e9ecaafcd0bd"`);
        await queryRunner.query(`DROP TABLE "homes"`);
        await queryRunner.query(`DROP TYPE "public"."homes_status_enum"`);
    }

}
