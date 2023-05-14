//Create a MongoDB Database and Collection
const { MongoClient, ServerApiVersion } = require('mongodb');
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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Create a new database
    const database = client.db('myDatabase');

    // Create a new collection
    const collection = database.collection('myCollection');

    // Insert a document into the collection
    const result = await collection.insertOne({ name:'Rahul Raj',role:'Full Stack Developer' });
    console.log(`Successfully inserted document with _id: ${result.insertedId}`);
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.error)
