import test from 'ava';
import { runBroker } from '../../lib/index.js';

test('runBroker must start a moleculer broker with some services', async (t) => {
  const broker = await runBroker({
    services: [
      {
        name: 'test',
        actions: {
          'my-action': {
            handler: () => 'This is a test',
          },
        },
      },
    ],
  });

  t.assert((await broker.call('test.my-action')) === 'This is a test');
  await broker.stop();
});

test('runBroker must throw an error if service started method throw an error', async (t) => {
  await t.throwsAsync(
    runBroker({
      services: [
        {
          name: 'test',
          async started() {
            throw new Error('Start failed');
          },
        },
      ],
    }),
  );
});
