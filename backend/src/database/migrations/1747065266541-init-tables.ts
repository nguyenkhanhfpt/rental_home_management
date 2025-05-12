import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitTables1747065266541 implements MigrationInterface {
  name = 'InitTables1747065266541';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "room_info" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "price" integer NOT NULL, "num_tenants" integer NOT NULL DEFAULT '1', "room_id" integer NOT NULL, CONSTRAINT "PK_ab02224911b1fd1dddf9ca673cb" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."room_invoices_status_enum" AS ENUM('pending', 'paid', 'cancelled')`,
    );
    await queryRunner.query(
      `CREATE TABLE "room_invoices" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "room_id" integer NOT NULL, "date" TIMESTAMP NOT NULL, "room_price" integer NOT NULL, "room_fees" jsonb NOT NULL, "total_price" integer NOT NULL, "status" "public"."room_invoices_status_enum" NOT NULL DEFAULT 'pending', "roomId" integer, CONSTRAINT "PK_be3db484ee5577310e6413cb7aa" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."rooms_status_enum" AS ENUM('active', 'inactive', 'available', 'fixing')`,
    );
    await queryRunner.query(
      `CREATE TABLE "rooms" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "short_name" character varying NOT NULL, "address" text NOT NULL, "home_id" integer NOT NULL, "base_price" integer NOT NULL, "status" "public"."rooms_status_enum" NOT NULL DEFAULT 'active', "homeId" integer, CONSTRAINT "PK_0368a2d7c215f2d0458a54933f2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "fees" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_97f3a1b1b8ee5674fd4da93f461" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."homes_status_enum" AS ENUM('active', 'inactive', 'building', 'fixing')`,
    );
    await queryRunner.query(
      `CREATE TABLE "homes" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "short_name" character varying NOT NULL, "address" text NOT NULL, "user_id" integer NOT NULL, "status" "public"."homes_status_enum" NOT NULL DEFAULT 'active', "userId" integer, CONSTRAINT "PK_a85aa6f2e56424fc745effdd5f2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_info" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" integer NOT NULL, "phone_number" character varying NOT NULL, "bank" character varying NOT NULL, "short_bank" character varying, "bank_account" character varying NOT NULL, "bank_account_name" character varying NOT NULL, CONSTRAINT "PK_273a06d6cdc2085ee1ce7638b24" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "home_fees" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "home_id" integer NOT NULL, "fee_id" integer NOT NULL, "fee" integer NOT NULL, CONSTRAINT "PK_50ded50466b46a0d5643e9ce883" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" DROP CONSTRAINT "PK_50ded50466b46a0d5643e9ce883"`,
    );
    await queryRunner.query(`ALTER TABLE "home_fees" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "home_fees" DROP COLUMN "created_at"`);
    await queryRunner.query(`ALTER TABLE "home_fees" DROP COLUMN "updated_at"`);
    await queryRunner.query(`ALTER TABLE "home_fees" DROP COLUMN "home_id"`);
    await queryRunner.query(`ALTER TABLE "home_fees" DROP COLUMN "fee_id"`);
    await queryRunner.query(`ALTER TABLE "home_fees" DROP COLUMN "fee"`);
    await queryRunner.query(`ALTER TABLE "home_fees" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD CONSTRAINT "PK_50ded50466b46a0d5643e9ce883" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD "home_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD "fee_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD "fee" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD "homesId" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" DROP CONSTRAINT "PK_50ded50466b46a0d5643e9ce883"`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD CONSTRAINT "PK_a3531ddee3e3acf04eeb26bb772" PRIMARY KEY ("id", "homesId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD "feesId" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" DROP CONSTRAINT "PK_a3531ddee3e3acf04eeb26bb772"`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD CONSTRAINT "PK_d9a9511a5f4e64313baeca1c86e" PRIMARY KEY ("id", "homesId", "feesId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" DROP CONSTRAINT "PK_d9a9511a5f4e64313baeca1c86e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD CONSTRAINT "PK_45bed955b0ef8cc28c1a4b9006a" PRIMARY KEY ("homesId", "feesId")`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_fa4f7ad92c816a772777a09c1d" ON "home_fees" ("homesId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_85daf79871a8a37390713fe9c8" ON "home_fees" ("feesId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "room_invoices" ADD CONSTRAINT "FK_4ab0dc1b20f48f3c03d4e88d7e0" FOREIGN KEY ("roomId") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "rooms" ADD CONSTRAINT "FK_999f842eba6ea92ee5f997c36eb" FOREIGN KEY ("homeId") REFERENCES "homes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "homes" ADD CONSTRAINT "FK_0418051bcd787a0e9ecaafcd0bd" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD CONSTRAINT "FK_fa4f7ad92c816a772777a09c1d4" FOREIGN KEY ("homesId") REFERENCES "homes"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD CONSTRAINT "FK_85daf79871a8a37390713fe9c88" FOREIGN KEY ("feesId") REFERENCES "fees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "home_fees" DROP CONSTRAINT "FK_85daf79871a8a37390713fe9c88"`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" DROP CONSTRAINT "FK_fa4f7ad92c816a772777a09c1d4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "homes" DROP CONSTRAINT "FK_0418051bcd787a0e9ecaafcd0bd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "rooms" DROP CONSTRAINT "FK_999f842eba6ea92ee5f997c36eb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "room_invoices" DROP CONSTRAINT "FK_4ab0dc1b20f48f3c03d4e88d7e0"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_85daf79871a8a37390713fe9c8"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_fa4f7ad92c816a772777a09c1d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" DROP CONSTRAINT "PK_45bed955b0ef8cc28c1a4b9006a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD CONSTRAINT "PK_d9a9511a5f4e64313baeca1c86e" PRIMARY KEY ("id", "homesId", "feesId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" DROP CONSTRAINT "PK_d9a9511a5f4e64313baeca1c86e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD CONSTRAINT "PK_a3531ddee3e3acf04eeb26bb772" PRIMARY KEY ("id", "homesId")`,
    );
    await queryRunner.query(`ALTER TABLE "home_fees" DROP COLUMN "feesId"`);
    await queryRunner.query(
      `ALTER TABLE "home_fees" DROP CONSTRAINT "PK_a3531ddee3e3acf04eeb26bb772"`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD CONSTRAINT "PK_50ded50466b46a0d5643e9ce883" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(`ALTER TABLE "home_fees" DROP COLUMN "homesId"`);
    await queryRunner.query(`ALTER TABLE "home_fees" DROP COLUMN "fee"`);
    await queryRunner.query(`ALTER TABLE "home_fees" DROP COLUMN "fee_id"`);
    await queryRunner.query(`ALTER TABLE "home_fees" DROP COLUMN "home_id"`);
    await queryRunner.query(`ALTER TABLE "home_fees" DROP COLUMN "updated_at"`);
    await queryRunner.query(`ALTER TABLE "home_fees" DROP COLUMN "created_at"`);
    await queryRunner.query(
      `ALTER TABLE "home_fees" DROP CONSTRAINT "PK_50ded50466b46a0d5643e9ce883"`,
    );
    await queryRunner.query(`ALTER TABLE "home_fees" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD "fee" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD "fee_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD "home_id" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(`ALTER TABLE "home_fees" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD CONSTRAINT "PK_50ded50466b46a0d5643e9ce883" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(`DROP TABLE "home_fees"`);
    await queryRunner.query(`DROP TABLE "user_info"`);
    await queryRunner.query(`DROP TABLE "homes"`);
    await queryRunner.query(`DROP TYPE "public"."homes_status_enum"`);
    await queryRunner.query(`DROP TABLE "fees"`);
    await queryRunner.query(`DROP TABLE "rooms"`);
    await queryRunner.query(`DROP TYPE "public"."rooms_status_enum"`);
    await queryRunner.query(`DROP TABLE "room_invoices"`);
    await queryRunner.query(`DROP TYPE "public"."room_invoices_status_enum"`);
    await queryRunner.query(`DROP TABLE "room_info"`);
  }
}
