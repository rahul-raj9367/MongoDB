//Gaming High Scores – Record and track game scores of users across different platforms.
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected Sucessfully');
})
.catch(()=>{
    console.log("Not Connected")
})

//user Schema
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
})

//Game Schema
const gameSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    platform:{
        type: String,
        required: true
    },
})

//High Score Schema
const highScoreSchema= new mongoose.Schema({
    Game:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Game'
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    Score:{
        type: Number,
        required: true
    },
    Date: {
        type: Date,
        required: true
    }
})


//Schema Model
const User= mongoose.model('User',userSchema)
const Game= mongoose.model('Game',gameSchema)
const HighScore= mongoose.model('HighScore',highScoreSchema)

//User Details
const user= new User({
    name:"Rahul Raj",
    email:"rahulraj@gmail.com",
    password:"1234df"
})
user.save()
.then(()=>console.log('User saved'))
.catch((err)=>console.error('Error saving user:', err));


//Game Details
const game= new Game({
    name:"Super Game",
    platform:"PC",
})
game.save()
.then(()=>console.log('game saved'))
.catch((err)=>console.error('Error Saving game :', err));


//High Score Details
const highScore= new HighScore({
    Game:game.id,
    user_id:user.id,
    Score: 1000,
    Date: new Date()
})
highScore.save()
.then(()=>console.log('High score saved'))
.catch((err)=>console.error('Error saving high score:',err));