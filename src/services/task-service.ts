import * as repository from '../repositories/task-repository';
import { CreateTaskInput, UpdateTaskInput } from '../schemas/task-schema';

export const createTaskService = async (data: CreateTaskInput) => {
  return repository.createTask(data);
};

export const getAllTaskService = async () => {
  return repository.getTasks()
};

export const getTaskService = async (id: string) => {
  return repository.getTaskById(id)
};

export const updateTaskService = async (id: string, data: UpdateTaskInput) => {
  return repository.updateTask(id, data)
};

export const deleteTaskService = async (id: string) => {
  return repository.deleteTask(id)
};