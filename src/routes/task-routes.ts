import { FastifyInstance } from 'fastify';
import * as controller from '../controllers/task-controller';

export async function taskRoutes(fastify: FastifyInstance) {
  fastify.post('/tasks', controller.createTaskController);
  fastify.get('/tasks', controller.getAllTaskController);
  fastify.get('/tasks/:id', controller.getTaskController);
  fastify.patch('/tasks/:id', controller.updateTaskController);
  fastify.delete('/tasks/:id', controller.deleteTaskController);
}