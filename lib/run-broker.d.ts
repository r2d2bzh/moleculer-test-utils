export default runBroker;
declare function runBroker({
  services,
  namespace,
  brokerOptions,
  logLevel,
}?: {
  services?: never[] | undefined;
  namespace?: string | undefined;
  brokerOptions?: {} | undefined;
  logLevel?: {} | undefined;
}): Promise<ServiceBroker>;
import { ServiceBroker } from 'moleculer';
