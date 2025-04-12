import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gca-awards';
if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

interface GlobalWithMongoose {
  mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: GlobalWithMongoose['mongoose'];
}

// Use const since we only assign once
const cached = global.mongoose ?? { conn: null, promise: null };
global.mongoose = cached;

async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = { bufferCommands: false };
    cached.promise = mongoose.connect(MONGODB_URI, opts);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;