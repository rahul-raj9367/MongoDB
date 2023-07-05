//Chatbot Database – Store user conversations, actions, and outcomes in a conversational AI chatbot.
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected Sucessfully');
})
.catch(()=>{
    console.log("Not Connected")
})

//User Schema
const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
})

//Chatmessage Schema
const ChatmessageSchema= new  mongoose.Schema({
    User_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    message:{
        type:String,
        required: true
    },
    timestamp:{
        type: Date,
        required: true
    },
})

//ChatAction Schema
const ChatActionSchema= new  mongoose.Schema({
    User_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    Action:{
        type:String,
        required: true
    },
    timestamp:{
        type: Date,
        required: true
    },
})

//ChatAction Schema
const ChatOutcomeSchema= new  mongoose.Schema({
    User_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    Outcomes:{
        type:String,
        required: true
    },
    timestamp:{
        type: Date,
        required: true
    },
})

//Schema Model
const User= mongoose.model('User',userSchema)
const Chatmessage= mongoose.model('Chatmessage',ChatmessageSchema)
const ChatAction= mongoose.model('ChatAction',ChatActionSchema)
const ChatOutcome= mongoose.model('ChatOutcome',ChatOutcomeSchema)

//User Details
const user= new User({
    name:"Rahul Raj",
    email:"rahulraj@gmail.com",
})
user.save()
.then(()=>console.log('User saved'))
.catch((err)=>console.error('Error saving user:', err));


//ChatMessage Details
const chatmessage= new Chatmessage({
    User_id:user.id,
    message:"Hello, ChatBot !",
    timestamp: new Date() 
})
chatmessage.save()
.then(()=>console.log('chatmessage saved'))
.catch((err)=>console.error('Error saving chatmessage:', err));


//ChatMessage Details
const chatAction= new ChatAction({
    User_id:user.id,
    Action:"get Weather data ",
    timestamp: new Date() 
})
chatAction.save()
.then(()=>console.log('chatAction saved'))
.catch((err)=>console.error('Error saving chatAction:', err));


//ChatMessage Details
const chatOutcome= new ChatOutcome({
    User_id:user.id,
    Outcomes:"weather data are displayed",
    timestamp: new Date() 
})
chatOutcome.save()
.then(()=>console.log('chatOutcome saved'))
.catch((err)=>console.error('Error saving chatOutcome:', err));