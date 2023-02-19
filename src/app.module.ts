import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/interfaces/User.entity';
import { UserModule } from './user/user.module';
import { createTableUser1676825995063 } from './migration/1676825995063-create_table_user';
import { createTableState1676828733572 } from './migration/1676828733572-create_table_state';
import { createTableCity1676828748968 } from './migration/1676828748968-create_table_city';
import { createTableAddress1676828773456 } from './migration/1676828773456-create_table_address';

@Module({
  imports: [
    UserModule,
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
      entities: [UserEntity],
      migrations: [
        createTableUser1676825995063,
        createTableState1676828733572,
        createTableCity1676828748968,
        createTableAddress1676828773456,
      ],
      migrationsRun: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
