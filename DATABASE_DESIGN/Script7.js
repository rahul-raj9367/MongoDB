//Hotel Management System
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected Sucessfully');
})
.catch(()=>{
    console.log("Not Connected")
})

//room Schema
const roomSchema= new mongoose.Schema({
    room_number:{
        type:String,
        required: true
    },
    room_type:{
        type:String,
        required: true
    },
    capacity:{
        type:String,
        required: true
    },
    rate:{
        type:String,
        required: true
    },
    is_avaliable:{
        type:Boolean,
        required: true
    }
})

//guest Schema
const guestSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    Contact_number:{
        type:Number,
        required: true
    },
    check_in_date:{
        type: Date,
        required: true
    },
    check_out_date:{
        type: Date,
        required: true
    },
    room:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Room'
    } 
})

//Schema Model
const Room=mongoose.model('Room',roomSchema)
const Guest= mongoose.model('Guest',guestSchema)

//Room Details
const room= new Room({
    room_number:"B12",
    room_type:"Standard",
    capacity:"4 members",
    rate:"1000 rupees",
    is_avaliable:true
})
room.save()
.then(()=> console.log("Room Saved"))
.catch((err)=> console.error("Room Error :"+ err))

//Guest Details
const guest= new Guest({
    name:"Rahul Raj",
    address:"12/2 Thiyagarajar Street Mukkudal",
    Contact_number:9025957223,
    check_in_date: new Date('2023-06-30'),
    check_out_date: new Date('2023-07-10'),
    room:room.id,
})

guest.save()
.then(()=> console.log('Guest Saved'))
.catch((err)=> console.error('Guest Error :'+err))