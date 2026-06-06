import { FastifyRequest, FastifyReply } from 'fastify'
import * as service from '../services/task-service'
import { CreateTaskInput, UpdateTaskInput } from '../schemas/task-schema'

type Params = {
  id: string;
};

export const createTaskController = async (
  request: FastifyRequest<{ Body: CreateTaskInput }>,
  reply: FastifyReply
) => {
  const task = await service.createTaskService(request.body);

  return reply.status(201).send(task);
}

export const getAllTaskController = async (   
  request: FastifyRequest, 
  reply: FastifyReply
) => {
  const tasks = await service.getAllTaskService();

  return reply.status(200).send(tasks)
}

export const getTaskController = async (
  request: FastifyRequest<{Params: Params}>,
  reply: FastifyReply
) => {
  const { id } = request.params;
  const task = await service.getTaskService(id);

  return reply.status(200).send(task);
}

export const updateTaskController = async (
  request: FastifyRequest<{Params: Params, Body: UpdateTaskInput}>,
  reply: FastifyReply
) => {
  const { id } = request.params;
  const task = await service.updateTaskService(id, request.body);

  return reply.status(200).send(task);
}

export const deleteTaskController = async (
  request: FastifyRequest<{Params: Params}>,
  reply: FastifyReply
) => {
  const { id } = request.params;
  const task = await service.deleteTaskService(id);

  return reply.status(200).send({ message: 'Task deleted', task});
}