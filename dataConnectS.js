const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const databaseName = 'mart';


async function getData() {

    let result = await client.connect();
  const   db = result.db(databaseName);
    return db.collection('products');

}
module.exports= getData;