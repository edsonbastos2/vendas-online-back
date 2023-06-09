import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/User.entity';
import { StateEntity } from './state/entities/State.entity';
import { UserModule } from './user/user.module';
import { createTableUser1676825995063 } from './migration/1676825995063-create_table_user';
import { createTableState1676828733572 } from './migration/1676828733572-create_table_state';
import { createTableCity1676828748968 } from './migration/1676828748968-create_table_city';
import { createTableAddress1676828773456 } from './migration/1676828773456-create_table_address';
import { alterTableState1676831114383 } from './migration/1676831114383-alter-table-state';
import { insertInState1676831168143 } from './migration/1676831168143-insert-in-state';
import { insertInCity1676831210699 } from './migration/1676831210699-insert-in-city';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { CityEntity } from './city/entities/City.entity';
import { CacheModule } from './cache/cache.module';
import { AddressEntity } from './address/entities/Address.entity';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USER,
      port: Number(process.env.DB_PORT),
      entities: [UserEntity, StateEntity, CityEntity, AddressEntity],
      migrations: [
        createTableUser1676825995063,
        createTableState1676828733572,
        createTableCity1676828748968,
        createTableAddress1676828773456,
        alterTableState1676831114383,
        insertInState1676831168143,
        insertInCity1676831210699,
      ],
      migrationsRun: true,
    }),
    UserModule,
    StateModule,
    CityModule,
    AddressModule,
    CacheModule,
    AuthModule,
    JwtModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
