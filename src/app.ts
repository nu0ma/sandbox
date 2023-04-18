import express, { NextFunction, Request, Response } from 'express';

import { getTodo, getTodos } from '@/handler/todo';
import { logMiddleware } from '@/middleware/logger';

import { getAlbums } from './handler/album';
import { wrapAPI } from './middleware/wrapAPI';
import { logger } from './utils/logger';

export const app = express();
app.use(logMiddleware);

app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

app.get(
  '/todos',
  wrapAPI(async (req: Request, res: Response) => {
    const result = await getTodos();
    res.json(result);
  })
);

app.get(
  '/todo/:id',
  wrapAPI(async (req: Request, res: Response) => {
    const result = await getTodo(req.params.id);
    res.status(200).json({ title: result });
  })
);

app.get(
  '/albums/:id',
  wrapAPI(async (req: Request, res: Response) => {
    const result = await getAlbums(req.params.id);
    res.status(200).json(result);
  })
);

app.get('/err', (req, res) => {
  throw new Error('Error');
});

app.use(
  (err: ErrorCallback, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.name + ' ' + req.method + ' ' + req.url);
    res.status(500).send('Internal Server Error at all error handling');
  }
);
