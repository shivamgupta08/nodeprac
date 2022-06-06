const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'
const database = 'node-prac'
const client = new MongoClient(url)

async function dbConnect(){
    const result = await client.connect()
    const db = result.db(database)
    return db.collection("phones")
}

module.exports = dbConnect