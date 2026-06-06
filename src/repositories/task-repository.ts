import { prisma } from '../lib/prisma';
import { CreateTaskInput, UpdateTaskInput } from '../schemas/task-schema';

export const createTask = (data: CreateTaskInput) => prisma.task.create({ data });
export const getTasks = () => prisma.task.findMany();
export const getTaskById = (id: string) => {
  console.log(id, 'repository')
  return prisma.task.findUnique({ where: { id } });
};
export const updateTask = (id: string, data: UpdateTaskInput) => prisma.task.update({ where: { id }, data });
export const deleteTask = (id: string) => prisma.task.delete({ where: { id } });
