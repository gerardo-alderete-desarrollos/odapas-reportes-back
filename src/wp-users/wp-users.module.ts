// src/wp-users/wp-users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WpUser } from './wp-user.entity';
import { WpUsersService } from './wp-users.service';
import { WpUsersController } from './wp-users.controller';
import { WpUsermeta } from '../wp-usermeta/wp-usermeta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WpUser, WpUsermeta])],
  controllers: [WpUsersController],
  providers: [WpUsersService],
  exports: [WpUsersService],
})
export class WpUsersModule {}
