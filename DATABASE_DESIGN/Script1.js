//Movie Ticket Booking System
const mongoose= require('mongoose')
mongoose.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected Sucessfully');
})
.catch(()=>{
    console.log("Not Connected")
})

//Movie Schema
const movieSchema= new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    director:{
        type:String,
        required: true
    },
    release_date:{
        type: Date,
        required: true
    },
    duration:{
        type:String,
        required: true
    },
    rating: {
        type: String,
    },
})
//Theater Schema
const theaterSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    capacity:{
        type: String,
        required: true
    },
    screens:[
        {
            screen_number:{
                type:Number
            }
        }
    ],
    seats:[
        {
            seat_number:{
                type:String,
                booked: Boolean
            }
        }
    ]
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
    password:{
        type:String,
        required: true
    },
    bookings: [
        {
            movie: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Movie'
            },
            theater: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Theater'
            },
            screen_number: {
                type: Number,
                required: true
            },
            seat_number:{
                type: String,
                required: true
            },
            booking_date:{
                type: Date,
                required: true
            }
        }
      ]
})

//models Schema
const Movie=mongoose.model('Movie',movieSchema);
const Theater= mongoose.model('Theater',theaterSchema);
const User=mongoose.model('User',userSchema)

//Movie
const movie1= new Movie({
    title:"Love Today",
    director:"Pradeep Ranganathan",
    release_date: new Date('2022-11-04'),
    duration:"2h 34m",
    rating:"5 Star"
})

movie1.save()
.then(()=> console.log("Movie1 Saved"))
.catch((err)=> console.error("Movie1 Error:"+err))


//Theater
const theater= new Theater({
    name:"Ram Muthuram Cinemas 4K 3D",
    location:"Tirunelveli",
    capacity:"767 seats",
    screens:[
        {
            screen_number: 2
        }
    ],
    seats:[
        {
            seat_number: "A10",
            booking: true
        }
    ]
})
theater.save()
.then(()=> console.log("Theater Saved"))
.catch((err)=> console.error("Theater Error:"+ err))


//user
const user1=new User({
    name:"Rahul Raj",
    email:"rahulselvan09810@gmail.com",
    password:"1234567",
    booking:[
        {
            movie:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Movie'
            },
            theater:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Theater'
            },
            screen_number:2,
            seat_number:"A10",
            booking_date: new Date()
        }
    ]
})
user1.save()
.then(()=> console.log("User 1 Saved"))
.catch((err)=> console.error("User1 Error"+err))
