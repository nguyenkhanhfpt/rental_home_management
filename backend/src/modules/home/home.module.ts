import { Module } from '@nestjs/common';
import { HomeController } from '@modules/home/home.controller';
import { HomeService } from '@modules/home/home.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeEntity } from '@database/entities/home.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HomeEntity])],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
