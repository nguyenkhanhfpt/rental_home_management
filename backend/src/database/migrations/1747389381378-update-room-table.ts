import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateRoomTable1747389381378 implements MigrationInterface {
  name = 'UpdateRoomTable1747389381378';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "home_fees" DROP CONSTRAINT "FK_fa4f7ad92c816a772777a09c1d4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" DROP CONSTRAINT "FK_85daf79871a8a37390713fe9c88"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_fa4f7ad92c816a772777a09c1d"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_85daf79871a8a37390713fe9c8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "rooms" RENAME COLUMN "address" TO "description"`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" DROP CONSTRAINT "PK_45bed955b0ef8cc28c1a4b9006a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD CONSTRAINT "PK_85daf79871a8a37390713fe9c88" PRIMARY KEY ("feesId")`,
    );
    await queryRunner.query(`ALTER TABLE "home_fees" DROP COLUMN "homesId"`);
    await queryRunner.query(
      `ALTER TABLE "home_fees" DROP CONSTRAINT "PK_85daf79871a8a37390713fe9c88"`,
    );
    await queryRunner.query(`ALTER TABLE "home_fees" DROP COLUMN "feesId"`);
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
      `ALTER TABLE "rooms" ALTER COLUMN "description" DROP NOT NULL`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_fa4f7ad92c816a772777a09c1d" ON "home_fees" ("homesId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_85daf79871a8a37390713fe9c8" ON "home_fees" ("feesId") `,
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
      `DROP INDEX "public"."IDX_85daf79871a8a37390713fe9c8"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_fa4f7ad92c816a772777a09c1d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "rooms" ALTER COLUMN "description" SET NOT NULL`,
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
      `ALTER TABLE "home_fees" ADD "feesId" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD CONSTRAINT "PK_85daf79871a8a37390713fe9c88" PRIMARY KEY ("feesId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD "homesId" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" DROP CONSTRAINT "PK_85daf79871a8a37390713fe9c88"`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD CONSTRAINT "PK_45bed955b0ef8cc28c1a4b9006a" PRIMARY KEY ("homesId", "feesId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "rooms" RENAME COLUMN "description" TO "address"`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_85daf79871a8a37390713fe9c8" ON "home_fees" ("feesId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_fa4f7ad92c816a772777a09c1d" ON "home_fees" ("homesId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD CONSTRAINT "FK_85daf79871a8a37390713fe9c88" FOREIGN KEY ("feesId") REFERENCES "fees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "home_fees" ADD CONSTRAINT "FK_fa4f7ad92c816a772777a09c1d4" FOREIGN KEY ("homesId") REFERENCES "homes"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }
}
