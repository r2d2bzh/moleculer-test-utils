import test from 'ava';
import { runBroker } from '../../lib/index.js';

test('runbroker must start a moleculer broker with some services', async (t) => {
  const broker = await runBroker({
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
