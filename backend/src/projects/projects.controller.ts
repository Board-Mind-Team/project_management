import { Controller, Get, Post, Body, Param, Delete, Put, Patch } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './entities/project.entity';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  create(@Body() project: Partial<Project>) {
    return this.projectsService.create(project);
  }

  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.projectsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() project: Partial<Project>) {
    return this.projectsService.update(id, project);
  }

  @Patch(':id')
  partialUpdate(@Param('id') id: number, @Body() project: Partial<Project>) {
    return this.projectsService.update(id, project);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.projectsService.remove(id);
  }
}
