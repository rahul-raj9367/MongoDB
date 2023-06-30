//Flight Reservation System
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected Sucessfully');
})
.catch(()=>{
    console.log("Not Connected")
})

// Flight schema
const filghtSchema = new mongoose.Schema({
    flight_number:{
        type:String,
        required: true
    },
    airline:{
        type:String,
        required: true
    },
    source:{
        type:String,
        required: true
    },
    destination:{
        type:String,
        required: true
    },
    departure_date:{    
        type: Date,
        required: true
    },
    arrival_date:{
        type: Date,
        required: true
    },
    avaliable_seats:{
        type:String,
        required: true
    },
    total_seats:{
        type:String,
        required: true
    },
    price:{
        type:String,
        required: true
    }
})

//passenger Schema
const passengerSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    contact_number:{
        type:String,
        required: true
    },
    flight:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Flight'
    }
})

//schema Model
const Flight= mongoose.model('Flight',filghtSchema)
const Passenger= mongoose.model('Passenger',passengerSchema)

//Flight Details
const flight= new Flight({
    flight_number:"F10012",
    airline:"Airline One",
    source:"NewYork",
    destination:"Los Angeles",
    departure_date:new Date('2023-07-15'),
    arrival_date:new Date('2023-07-15'),
    avaliable_seats:"100",
    total_seats:"150",
    price:"8500",
})
flight.save()
.then(()=> console.log("Flight Saved"))
.catch((err)=> console.error("Flight Error"+err))

//Passenger Details
const passenger= new Passenger({
    name:"Rahul RAJ",
    email:"rahulselvan0810@gmail.com",
    address:"12/2 thiyagarajar street Mukkudal",
    contact_number:9025957223,
    flight:flight.id
})
passenger.save()
.then(()=> console.log("Passenger Saved"))
.catch((err)=> console.error("Passenger Error"+err))
