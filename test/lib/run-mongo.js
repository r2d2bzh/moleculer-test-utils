import test from 'ava';
import { runMongo } from '../../lib/index.js';

test('Start and connect to mongo resources', async (t) => {
  const { mongoClient, mongoUrl } = await runMongo();
  t.assert(mongoUrl.startsWith('mongodb://mongo'));

  const database = mongoClient.db('test');
  const collection = database.collection('test');
  await collection.insertOne({ test: 1 });
  await database.dropDatabase();
  await mongoClient.close();
});
