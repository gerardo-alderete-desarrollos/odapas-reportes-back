// src/wp-users/wp-users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WpUser } from './wp-user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { WpUsermeta } from '../wp-usermeta/wp-usermeta.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class WpUsersService {
  constructor(
    @InjectRepository(WpUser)
    private usersRepo: Repository<WpUser>,

    // opcional si quieres operar metadatos desde el servicio de usuarios
    @InjectRepository(WpUsermeta)
    private usermetaRepo: Repository<WpUsermeta>,
  ) {}

  async findAll(): Promise<WpUser[]> {
    return this.usersRepo.find({ relations: ['usermeta'] });
  }

  async findOne(id: string): Promise<WpUser> {
    const user = await this.usersRepo.findOne({
      where: { ID: id },
      relations: ['usermeta'],
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

async create(dto: CreateUserDto): Promise<WpUser> {
  const entity = this.usersRepo.create({
    user_login: dto.user_login,
    user_pass: dto.user_pass,
    user_nicename: dto.user_nicename,
    user_email: dto.user_email,
    user_url: dto.user_url,
    user_registered: dto.user_registered ?? new Date(),
    user_activation_key: dto.user_activation_key,
    user_status: dto.user_status,
    display_name: dto.display_name,
  });

  return await this.usersRepo.save(entity);
}


  async update(id: string, dto: UpdateUserDto): Promise<WpUser> {
    const user = await this.findOne(id);
    this.usersRepo.merge(user, dto as any);
    return this.usersRepo.save(user);
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await this.usersRepo.remove(user);
  }

  // método útil: obtener metadatos por user id
  async getMetaByUserId(userId: string): Promise<WpUsermeta[]> {
    return this.usermetaRepo.find({ where: { user_id: userId } });
  }
}
