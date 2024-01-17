import { MongoClient } from 'mongodb';
import { v4 as uuid } from 'uuid';

export default async ({ namespace = uuid(), hostname = 'mongo' } = {}) => {
  const mongoUrl = `mongodb://${hostname}/${namespace}`;
  const mongoOptions = { useUnifiedTopology: true };
  const mongoClient = await MongoClient.connect(mongoUrl, mongoOptions);

  return { mongoClient, mongoUrl, mongoOptions, namespace };
};
