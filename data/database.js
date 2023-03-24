const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb+srv://endgame2022:cAQsas46Lbpm5sAL@cluster0.umqwc.mongodb.net/avatar', {useNewUrlParser: true, useUnifiedTopology: true});
  database = client.db('avat');
}

function getDb() {
  if (!database) {
    throw new Error('You must connect first!');
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
};
