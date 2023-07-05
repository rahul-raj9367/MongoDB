//Financial Transaction Records– Store banking transactions, customer accounts, payment records, and other financial data.
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected Sucessfully');
})
.catch(()=>{
    console.log("Not Connected")
})

//customerSchema
const customerSchema= new mongoose.Schema({
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
    address:{
        type:String,
        required: true
    },
    balance:[{
        type: Object
    }]
})

//transactionsSchema
const transactionsSchema = new mongoose.Schema({
    Customer_Id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    },
    type:{
        type:String,
        enum: ['Deposit', 'Withdrawal', 'Transfer', 'Payment']
    },
    amount:{
        type: Number,
        required: true
    },
    timestamp:{
        type: Date,
        required: true
   },
})

//Payment Schema
const paymentSchema = new mongoose.Schema({
    Customer_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer',
    },
    amount:{
        type: Number,
        required: true
    },
    payment_Method:{
        type:String,
        required: true
    },
    status:{
        type: String,
        enum: ['Pending', 'Paid', 'Failed']
    },
})

//Schema Models
const Customer=mongoose.model('Customer',customerSchema)
const Transaction=mongoose.model('Transaction',transactionsSchema)
const Payment= mongoose.model('Payment',paymentSchema)


//Customer Details
const customer= new Customer({
    name:"Rahul Raj",
    email:"rahulselvan0810@gmail.com",
    password:"1234dfg",
    address:"12/2 thiyagarajar Street Mukkudal",
    balance:[]
})
customer.save()
.then(()=> console.log("customer Saved"))
.catch((err)=> console.error("customer error"+ err))

//Transaction Details
const transaction= new Transaction({
    Customer_Id:customer.id,
    type:'Deposit',
    amount:1000,
    timestamp: new Date()
})
transaction.save()
.then(()=> console.log("transaction Saved"))
.catch((err)=> console.error("transaction error"+ err))


//Payment Method
const payment= new Payment({
    Customer_Id:customer.id,
    amount:1000,
    payment_Method:"Credit_Card",
    status:"Paid",
})
payment.save()
.then(()=> console.log("payment Saved"))
.catch((err)=> console.error("payment error"+ err))


customer.balance.push({
    balance:payment.amount,
})