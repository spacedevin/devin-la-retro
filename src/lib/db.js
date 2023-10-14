// https://github.com/vercel/next.js/blob/canary/examples/with-mongodb/util/mongodb.js
import { MongoClient } from 'mongodb'

const { MONGO_URL, MONGO_DB } = process.env

if (!MONGO_URL) {
  throw new Error(
    'Please define the MONGO_URL environment variable inside .env.local',
  )
}

if (!MONGO_DB) {
  throw new Error(
    'Please define the MONGO_DB environment variable inside .env.local',
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo

if (!cached) {
  // eslint-disable-next-line no-multi-assign
  cached = global.mongo = { conn: null, promise: null }
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

    cached.promise = MongoClient.connect(MONGO_URL, opts).then(client => ({
      client,
      db: client.db(MONGO_DB),
    }))
  }
  cached.conn = await cached.promise
  return cached.conn
}