import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { WpUsersModule } from './wp-users/wp-users.module';
import { WpUsermetaModule } from './wp-usermeta/wp-usermeta.module';
import { OdapasReportesModule } from './reportes/odapas-reportes.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER || 'gerardo',
      password: process.env.DB_PASSWORD || 'Callofduty',
      database: process.env.DB_NAME || 'prueba1',
      autoLoadEntities: true,
      synchronize: false, // IMPORTANTE: false para DB existente
    }),
    WpUsersModule,
    WpUsermetaModule,
    OdapasReportesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
