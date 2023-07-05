//Hotel Booking System – Track hotel rooms, customers, reservations, payments, and other relevant information.
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected Sucessfully');
})
.catch(()=>{
    console.log("Not Connected")
})

//HotelSchema
const hotelSchema= new mongoose.Schema({
    Hotel_name:{
        type: String,
        required: true
    },
    Address:[
        {
            street:{
                type:String,
                required: true
            },
            city:{
                type:String,
                required: true
            },
            state:{
                type:String,
                required: true
            },
            conutry:{
                type:String,
                required: true
            }
        }
    ],
})

//Room Schema
const roomSchema= new mongoose.Schema({
    hotel_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hotel'
    },
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
        type:Number,
        required: true
    },
    is_avaliable:{
        type:Boolean,
        required: true
    }
})

//Customer Schema
const customerSchema= new mongoose.Schema({
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
    hotel:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Hotel'
    },
    room:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Room'
    } 
})

//Reservation schema
const reservationSchema= new mongoose.Schema({
    Hotel_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hotel'
    },
    Room_Id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Room'   
    },
    check_in_date:{
        type: Date,
        required: true
    },
    check_out_date:{
        type: Date,
        required: true
    },
})

//PaymentSchema
const paymentSchema= new mongoose.Schema({
    reservation_Id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Reservation'
    },
    amount:{
        type:Number,
        required: true
    },
    payment_Date:{
        type: Date,
        required: true
    },
})

const Hotel= mongoose.model('Hotel',hotelSchema)
const Room = mongoose.model('Room',roomSchema)
const Customer = mongoose.model('Customer',customerSchema)
const Reservation= mongoose.model('Reservation',reservationSchema)
const Payment= mongoose.model('Payment',paymentSchema)


//Hotel Details
const hotel= new Hotel({
    Hotel_name:"HOTEL ABC",
    Address:[
        {
            street:"12/2 Thiyagarajar Street Mukkudal",
            city:"Tirunelveli",
            state:"Tamil Nadu",
            conutry:"India"
        }
    ],
})
hotel.save()
.then(()=> console.log("Hotel Saved"))
.catch((err)=> console.error("Hotel Error"+ err))


//Room Details
const room= new Room({
    Room_Id:hotel.id,
    room_number:"B12",
    room_type:"Standard",
    capacity:"4 members",
    rate:1000,
    is_avaliable:true
})
room.save()
.then(()=> console.log("Room Saved"))
.catch((err)=> console.error("Room Error :"+ err))

//Customer Details
const customer= new Customer({
    name:"Rahul Raj",
    address:"12/2 Thiyagarajar Street Mukkudal",
    Contact_number:9025957223,
    check_in_date: new Date('2023-07-05'),
    check_out_date: new Date('2023-07-10'),
    hotel:hotel.id,
    room:room.id,
})
customer.save()
.then(()=> console.log("customer Saved"))
.catch((err)=> console.error("customer Error :"+ err))

//Reservation Details
const reservation= new Reservation({
    Hotel_Id:hotel.id,
    Room_Id:room.id,
    check_in_date: new Date('2023-07-05'),
    check_out_date: new Date('2023-07-10'),
})
reservation.save()
.then(()=> console.log("reservation Saved"))
.catch((err)=> console.error("reservation Error :"+ err))


//Payment Methods
const payment= new Payment({
    reservation_Id:reservation.id,
    amount: room.rate,
    payment_Date: new Date()
})
payment.save()
.then(()=> console.log("payment Saved"))
.catch((err)=> console.error("payment Error :"+ err))