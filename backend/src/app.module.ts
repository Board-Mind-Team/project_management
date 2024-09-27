import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'gestion_proyectos',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, //Use False in production
      migrations: ['dist/migrations/**/*{.ts,.js}'],
    }),
    ProjectsModule,
    TasksModule,
    UsersModule,
  ],
})
export class AppModule {}

