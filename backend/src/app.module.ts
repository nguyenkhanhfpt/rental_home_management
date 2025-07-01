import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from '@app.controller';
import { AppService } from '@app.service';
import { UsersModule } from '@modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from '@modules/auth/auth.module';
import databaseConfig from '@config/database.config';
import appConfig from '@config/app.config';
import { APP_GUARD } from '@nestjs/core';
import { AccessTokenGuard } from '@guards';
import { QueueModule } from '@modules/queue/queue.module';
import { HeaderResolver, I18nModule } from 'nestjs-i18n';
import { join } from 'path';
import { LoggerModule } from '@modules/logger/logger.module';
import { LoggerMiddleware } from '@shared/middlewares';
import { ClsModule } from 'nestjs-cls';
import { HomeModule } from '@modules/home/home.module';
import { RoomModule } from '@modules/room/room.module';
import { RoomInfoModule } from '@modules/roomInfo/room-info.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, appConfig],
    }),
    I18nModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        fallbackLanguage: configService.get<string>('app.fallbackLanguage'),
        loaderOptions: {
          path: join(__dirname, '/i18n/'),
          watch: true,
        },
      }),
      resolvers: [new HeaderResolver([process.env.APP_LOCATE_LANGUAGE])],
      inject: [ConfigService],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('database'),
    }),
    ClsModule.forRoot({
      global: true,
    }),
    LoggerModule,
    UsersModule,
    AuthModule,
    QueueModule,
    HomeModule,
    RoomModule,
    RoomInfoModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
    AppService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
