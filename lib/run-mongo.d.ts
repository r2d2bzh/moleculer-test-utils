declare function _default({ namespace, hostname }?: {
    namespace?: string;
    hostname?: string;
}): Promise<{
    mongoClient: MongoClient;
    mongoUrl: string;
    mongoOptions: {};
    namespace: string;
}>;
export default _default;
import { MongoClient } from 'mongodb';
