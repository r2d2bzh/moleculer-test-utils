import test from 'ava';
import { runBroker, addServices } from '../../lib/index.js';

test('Be able to add services to a running moleculer broker', async (t) => {
  const broker = await runBroker();
  await addServices({
    broker,
    services: [
      {
        name: 'test',
        actions: {
          'my-action': {
            handler() {
              return 'This is a test';
            },
          },
        },
      },
    ],
  });

  t.assert((await broker.call('test.my-action')) === 'This is a test');
  await broker.stop();
});
