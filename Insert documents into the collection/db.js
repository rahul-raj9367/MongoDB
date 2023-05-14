//Insert documents into the collection
const { MongoClient, ServerApiVersion } = require('mongodb');
const { connect, connection } = require('mongoose');
const uri = "mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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
    const database=client.db('database');
    const collection=database.collection('insertMany');
    const documents=[
        {name:'rahul raj',age:21,role:'Full Stack Developer'},
        {name:'ponniah',age:20,role:'software developer'},
        {name:'velmurugan',age:20,role:{
            dev:"Fronted developer",
            hobbies:"learning"
        }}
    ]
    const result=await collection.insertMany(documents);
    console.log(`Successfully inserted ${result.insertedCount} documents`)
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
