//Social Network – Store user profiles, connections, messages, posts, tags, and other related information.
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected Sucessfully');
})
.catch(()=>{
    console.log("Not Connected")
})

//Store user profiles Schema
const userProfileSchema= new mongoose.Schema({
    user_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    bio:{
        type: String,
        required: true
    },
    profile_picture:{
        type: String,
        required: true
    },
    friends:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    post:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }],
    message:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Message'
    }]
})

//Post Schema
const postSchema= new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    tags:{
        type: String,
        required: true
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    comments:[{
        users:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        text: String
    }],
    created_date:{
        type: Date,
        required: true
    }
})

//Message Schema
const messageSchema= new mongoose.Schema({
    sender:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    reciver:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    content:{
        type: String,
        required: true
    },
    created_date: Date
})

//Schema Models
const User= mongoose.model('Model',userProfileSchema)
const Post=mongoose.model('Post',postSchema)
const Message= mongoose.model('Message',messageSchema) 

//User Details
const user= new User({
    user_name:"rahul_raj9367",
    email:"rahulraj123@gmail.com",
    password:"56789bj",
    bio:"Never Stop Learning",
    profile_picture:"https://instagram.fixm4-3.fna.fbcdn.net/v/t51.2885-19/131449653_741001766590208_6073499236418492742_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fixm4-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=pW2qei88hswAX9WOwoG&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBd10Ebjr0_8OznSG8fPUAI_bgAkkPPRkGN0ssZMSQ1uQ&oe=64AA5831&_nc_sid=8b3546",
    friends:[],
    post:[],
    message:[],
})
user.save()
.then(()=>console.log('User saved'))
.catch((err)=>console.error('Error saving user:', err));

const user2= new User({
    user_name:"RAHUL RAJ",
    email:"rahulraj123@gmail.com",
    password:"FVGB57",
    bio:"Never Stop Learning",
    profile_picture:"https://media.licdn.com/dms/image/D5603AQEIZqtC33Pq2g/profile-displayphoto-shrink_800_800/0/1678857474912?e=1694044800&v=beta&t=EJIrnpv3ToohUhhKvPrPoeqw_X8S1N7V86joRZDxh_w",
    friends:[],
    post:[],
    message:[],
})
user2.save()
.then(()=>console.log('User2 saved'))
.catch((err)=>console.error('Error saving user:', err));

//Post Details
const post = new Post({
    content:"Push yourself Because no one else is going to do it for you",
    image:"https://media.licdn.com/dms/image/D4D22AQFvAQNH_F4s_Q/feedshare-shrink_800/0/1687153414350?e=1691625600&v=beta&t=cxUwCncDUmASpeKaEyY5kfii5YHP04V5ngc6Q6arLZY",
    tags:"never give up",
    comments:[],
    created_date: new Date()
})
post.save()
.then(()=>console.log('post saved'))
.catch((err)=>console.error('post saving Error:', err));


//message Details
const message= new Message({
    sender:user.id,
    reciver:user2.id,
    content:"hello Rahul",
    created_date: new Date()
})
message.save()
.then(()=>console.log('message saved'))
.catch((err)=>console.error('message saving Error:', err));