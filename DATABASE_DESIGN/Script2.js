//Banking System
const mongoose= require('mongoose')
mongoose.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected Sucessfully');
})
.catch(()=>{
    console.log("Not Connected")
})

//Account Schema
const accountSchema= new mongoose.Schema({
    account_Number:{
        type: String,
        required: true
    },
    account_type:{
        type: String,
        required: true
    },
    balance:{
        type: Number,
        required: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
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
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    account:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Account'
    },
    cust_Id:{
        type: String,
        required: true
    },
    IFSC_CODE:{
        type: String,
        required: true
    },
})

//transaction 
const transactionSchema = new mongoose.Schema({
    account:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Account'
    },
    transaction_type:{
        type:String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
})

//Model Schema
const Account= mongoose.model('Account',accountSchema)
const User= mongoose.model('User',userSchema)
const Transaction= mongoose.model('Transaction',transactionSchema)

//User Details
const user= new User({
    name:"Rahul Raj",
    email:"rahulselvan0810@gmail.com",
    password:"12345",
    phone:9025957223,
    cust_Id:"ABC123",
    IFSC_CODE:"ERTYUI567GT"
})
user.save()
.then(()=>console.log('User Saved'))
.catch((err)=> console.error('User Error'+ err))

//Account Details
const account= new Account({
    account_Number:"0090414211115",
    account_type:"Savings Account",
    balance:1000,
    owner: user.id
})
account.save()
.then(()=>console.log('Account Saved'))
.catch((err)=> console.error('Account Error'+ err))


//Transaction Details
const transaction= new Transaction({
    account:account.id,
    transaction_type:"Deposit",
    amount:1000,
    date: new Date()
})
transaction.save()
.then(()=>console.log('transaction Saved'))
.catch((err)=> console.error('transaction Error'+ err))