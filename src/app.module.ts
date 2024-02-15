import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mssql',
    //   host: 'SURFACE-DAVID\\SQLEXPRESS',
    //   port: 1433,
    //   username: 'sa',
    //   password: '123456pw$',
    //   database: 'DivingClubs',
    //   options: {
    //     trustServerCertificate: true,
    //     useUTC: true,
    //   },
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'O)B5&nE6F',
      database: 'divingclubs',
      options: {
        trustServerCertificate: true,
        useUTC: true,
      },
      entities: [
        AddressEntity,
      ],
      synchronize: false,
    }),
    AddressesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
