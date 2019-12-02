
import Server from './server';
import logger from './utils/logger';
import Router from 'koa-router';

require('dotenv').config();

const { PORT } = process.env;

try {
  const app = new Server();
  app.runServer(PORT ?? "8080");
} catch (error) {
  logger.error({
    level: 'error',
    message: `Server error: ${error.message}`,
    service: 'chloe-server',
  });
}

const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = { msg: 'Hello, world' };

  await next();
});