export default runBroker;
declare function runBroker({ services, namespace, brokerOptions }?: {
    services?: any[];
    namespace?: string;
    brokerOptions?: {};
}): Promise<ServiceBroker>;
import { ServiceBroker } from 'moleculer';
