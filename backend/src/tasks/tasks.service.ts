import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  create(task: Partial<Task>): Promise<Task> {
    return this.tasksRepository.save(task);
  }

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find({ relations: ['assignedTo'] });
  }

  findOne(id: number): Promise<Task> {
    return this.tasksRepository.findOne({ where: { id }, relations: ['assignedTo'] });
  }

  async update(id: number, taskData: Partial<Task>): Promise<Task> {
    await this.tasksRepository.update(id, taskData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
