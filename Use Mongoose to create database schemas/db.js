//Use Mongoose to create database schemas
const mongoose=require('mongoose');
const User=require('./model');

const uri = "mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((err) => {
    console.error(err);
});

// const user=new User({
//     name:'rahul raj',
//     age: 21
// });

async function run(){
    const newuser=await User.create({
        name:'Rahul',
        age:21
    });
    newuser.name="Rahul Raj";
    await newuser.save();
    console.log(newuser);
}

run();