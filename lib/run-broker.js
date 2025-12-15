import { v4 as uuid } from 'uuid';
import { ServiceBroker } from 'moleculer';

const runBroker = async ({ services = [], namespace = uuid(), brokerOptions = {} } = {}) => {
  const broker = new ServiceBroker({
    namespace,
    logLevel: {},
    ...brokerOptions,
  });

  for (const service of services) {
    broker.createService(service);
  }
  broker.start();
  await broker.waitForServices(services.map(({ name }) => name));
  return broker;
};

export default runBroker;
