//Update documents in the collection
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
    await client.connect();
    const database=client.db('database');
    const collection=database.collection('insertMany');
    const documents=[
        {name:'rahul raj',age:21,role:'Full Stack Developer',salary:"50000"},
        {name:'ponniah',age:20,role:'software developer',salary:"50000"},
        {name:'velmurugan',age:20,role:{
            dev:"Fronted developer",
            hobbies:"learning",
            salary:"50000"
        }}
    ]
    const result=await collection.updateMany({"role":"Full Stack Developer"},//updateOne(filter,update)
    {
        $set:{"salary":"70000"}
    }
    );
    console.log(`Successfully updated ${result.modifiedCount} document`);
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);


