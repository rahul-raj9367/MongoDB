//Index documents in the collection
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    await client.connect();
    const database=client.db('data');
    const collection=database.collection('Index');
    const details={Name:"RAHUL RAJ",Degree:"B.E(EEE)"}
    // const result=await collection.createIndex({Degree: 100})
    const result=await collection.indexes();
    console.log('Indexes:', result);
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.error);
