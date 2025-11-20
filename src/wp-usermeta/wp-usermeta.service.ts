// src/wp-usermeta/wp-usermeta.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WpUsermeta } from './wp-usermeta.entity';
import { CreateUsermetaDto } from './dto/create-usermeta.dto';
import { WpUser } from '../wp-users/wp-user.entity';
import { UpdateUsermetaDto } from './dto/update-usermeta.dto';

@Injectable()
export class WpUsermetaService {
  constructor(
    @InjectRepository(WpUsermeta)
    private usermetaRepo: Repository<WpUsermeta>,

    @InjectRepository(WpUser)
    private usersRepo: Repository<WpUser>,
  ) {}

  async findAll(): Promise<WpUsermeta[]> {
    return this.usermetaRepo.find({ relations: ['user'] });
  }

  async findOne(id: string): Promise<WpUsermeta> {
    const item = await this.usermetaRepo.findOne({
      where: { umeta_id: id },
      relations: ['user'],
    });
    if (!item) throw new NotFoundException('Usermeta not found');
    return item;
  }

  async findByUserId(userId: string): Promise<WpUsermeta[]> {
    return this.usermetaRepo.find({ where: { user_id: userId } });
  }

async create(dto: CreateUsermetaDto): Promise<WpUsermeta> {
  const user = await this.usersRepo.findOne({ where: { ID: dto.user_id } });
  if (!user) throw new NotFoundException('User not found');

  const entity = this.usermetaRepo.create({
    user_id: dto.user_id,
    meta_key: dto.meta_key,
    meta_value: dto.meta_value,
  });

  return this.usermetaRepo.save(entity); // 👈 devuelve WpUsermeta (no array)
}


  async update(id: string, dto: UpdateUsermetaDto): Promise<WpUsermeta> {
    const item = await this.findOne(id);
    this.usermetaRepo.merge(item, dto as any);
    return this.usermetaRepo.save(item);
  }

  async remove(id: string): Promise<void> {
    const item = await this.findOne(id);
    await this.usermetaRepo.remove(item);
  }
}
