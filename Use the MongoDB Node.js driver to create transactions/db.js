const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
const ObjectID=mongodb.ObjectId;
let database;
async function getDatabase(){
    const client=await MongoClient.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority");
    database=client.db('library');
    if(!database){
        console.log('Data Base Not connected');
    }
    return database;
}
module.exports={
    getDatabase,
    ObjectID
}
