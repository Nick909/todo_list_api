import Fastify from 'fastify';
import cors from '@fastify/cors';
import { taskRoutes } from './routes/task-routes';

const server = Fastify();
server.register(cors);

server.register(taskRoutes);

server.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  console.log(`Server running at ${address}`);
});