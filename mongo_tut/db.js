import { MongoClient } from "mongodb";

let dbConnection; // Declare dbConnection outside the try block

const connectToDb = async (cb) => {
  let client; // Declare client variable

  try {
    client = await MongoClient.connect("mongodb://localhost:27017/bookstore");
  } catch (err) {
    console.error(err);
    return cb(err);
  }

  dbConnection = client.db();
  return cb();
};

const getDb = () => {
  return dbConnection;
};

export { connectToDb, getDb };
