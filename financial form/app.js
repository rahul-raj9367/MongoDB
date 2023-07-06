const express= require('express');
const app= express();
const path=require('path')
const bodyparser= require('body-parser')

//Database
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected Sucessfully');
})
.catch(()=>{
    console.log("Not Connected")
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
   },
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
    transactions:{
        type:transactionsSchema
    },
    payment:{
        type:paymentSchema
    }

})

//Schema Models
const Customer=mongoose.model('Customer',customerSchema)


app.use(bodyparser.urlencoded({ extended: true }));
app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})
app.post('/financial-records',(req,res,next)=>{
    const customer= new Customer({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        address:req.body.address,
        transactions:{
            type:req.body.transaction,
            amount:req.body.number,
        },
        payment:{
            amount:req.body.number,
            payment_Method:req.body.payment,
        }
    })
    customer.save()
    .then(() => {
      res.send('Financial record saved successfully!');
    })
    .catch((error) => {
      res.status(500).send('Error saving the financial record.');
    });
})
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','404pagenotfound.html'))
})
app.listen(3000,()=>{
    console.log("http://localhost:3000")
})