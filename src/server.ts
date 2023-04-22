import { createTerminus } from '@godaddy/terminus';

import { app } from './app';

const port = 8080;

const terminusConfig = {
  healthCheck: {
    '/health_check': () => Promise.resolve(),
  },

  onSignal: () => {
    console.log('server is starting cleanup');
    return Promise.resolve();
  },

  onShutdown: () => {
    console.log('cleanup finished, server is shutting down');
    return Promise.resolve();
  },
};

createTerminus(app, terminusConfig);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
