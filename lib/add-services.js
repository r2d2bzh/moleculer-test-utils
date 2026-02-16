export default async ({ broker, services = [] }) => {
  for (const service of services) {
    broker.createService(service);
  }
  await broker.waitForServices(services.map(({ name }) => name));
  return broker;
};
