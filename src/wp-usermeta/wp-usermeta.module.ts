// src/wp-usermeta/wp-usermeta.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WpUsermeta } from './wp-usermeta.entity';
import { WpUsermetaService } from './wp-usermeta.service';
import { WpUsermetaController } from './wp-usermeta.controller';
import { WpUser } from '../wp-users/wp-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WpUsermeta, WpUser])],
  controllers: [WpUsermetaController],
  providers: [WpUsermetaService],
  exports: [WpUsermetaService],
})
export class WpUsermetaModule {}
