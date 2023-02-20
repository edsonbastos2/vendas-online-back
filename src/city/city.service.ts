import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CacheService } from 'src/cache/cache.service';
import { Repository } from 'typeorm';
import { CityEntity } from './entities/City.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
    private readonly cacheService: CacheService,
  ) {}

  async getAllCityState(stateId: number): Promise<CityEntity[]> {
    return this.cacheService.getCache(`state_${stateId}`, () =>
      this.cityRepository.find({
        where: {
          stateId,
        },
      }),
    );
  }
}
