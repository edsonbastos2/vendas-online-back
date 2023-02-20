import { Module, CacheModule as CacheModuleNest } from '@nestjs/common';
import { CacheService } from './cache.service';

@Module({
  imports: [
    CacheModuleNest.register({
      ttl: 60000000,
    }),
  ],
  providers: [CacheService],
  exports: [CacheService],
})
export class CacheModule {}
