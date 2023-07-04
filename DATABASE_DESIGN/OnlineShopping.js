//Online Shopping Platform
//Storing customer information, product information,transaction history,and order details.
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected Sucessfully');
})
.catch(()=>{
    console.log("Not Connected")
})


//Storing customer information Schema
const customerInformationSchema= new mongoose.Schema({
    Customer_id:{
        type:String,
        required: true
    },
    Name:{
        type:String,
        required: true
    },
    Email:{
        type:String,
        required: true
    },
    Password:{
        type: String,
        required: true
    },
    Contact_Number:{
        type:Number,
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
    date_of_birth:{
        type:String,
        required: true
    },
    created_up:{
        type: Date,
        required: true
    },
    update_up:{
        type: Date,
    }  
})

//product information Schema
const productInformationSchema= new mongoose.Schema({
    Name:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    brand_name:{
        type:String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        min:0
    },
    quantity:{
        type: Number,
        required: true,
        min:0
    },
    is_avaliable:{
        type:Boolean,
        required: true
    },
    manufacturer:{
        type:String,
        required: true
    },
})

//Order Schema
const orderSchema= new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
    },
    quantity:{
        type:Number,
        required: true
    },
    price:{
        type:Number,
        required: true
    }
})

//transaction Schema
const transactionSchema= new mongoose.Schema({
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    },
    order:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Order'
    },
    total_amount:{
        type:Number,
        required: true
    },
    transaction_date:{
        type: Date,
        required: true
    }
})

//Schema Model
const Customer= mongoose.model('Customer',customerInformationSchema)
const Product= mongoose.model('Product',productInformationSchema)
const Order= mongoose.model('Order',orderSchema)
const Transaction= mongoose.model('Transaction',transactionSchema)


//Customer Details
const customer= new Customer({
    Customer_id:"AB123",
    Name:"Rahul Raj",
    Email:"rahulselvan0810@gmail.com",
    Password:"1234ghjk",
    Contact_Number:9025957223,
    Address:[
        {
            street:"12/2 Thiyagarajar Street Mukkudal",
            city:"Tirunelveli",
            state:"Tamil Nadu",
            conutry:"India"
        }
    ],
    date_of_birth:"08-10-2002",
    created_up: new Date('2023-07-04'),
})
customer.save()
.then(()=> console.log("Customer Saved"))
.catch((err)=> console.error("Customer Error:"+err))

//Product Details
const product = new Product({
    Name:"APPLE 2020 Macbook Air M1",
    description:"This Apple Macbook is powered by the Apple M1 chip and is easily portable so that you can carry it with you anywhere you want. This thin and light notebook is equipped with an 8-core CPU to handle all your tasks more efficiently. The 8-core GPU of this notebook takes graphic-intensive games and apps to a whole new level. It also comes with a 16-core Neural Engine to do machine learning tasks more effectively. Its fan-less design offers silent operations and has a long-lasting battery life which can last up to 18 hours on a single charge.",
    category:"Electronics",
    brand_name:"Apple",
    price:82990,
    quantity:2,
    is_avaliable:true,
    manufacturer:"Apple Inc One Apple Park Way Cupertino CA 95014 USA",
})
product.save()
.then(()=> console.log("Product Saved"))
.catch((err)=> console.error("Product Error"+ err))

//Order Details
const order= new Order({
    product:product.id,
    quantity:product.quantity,
    price:product.price,
})
order.save()
.then(()=> console.log("Order Saved"))
.catch((err)=> console.error("Order Error"+ err))

//Transaction Details
const transaction= new Transaction({
    customer: product.id,
    order:order.id,
    total_amount: order.quantity*product.price,
    transaction_date: new Date()
})
transaction.save()
.then(()=> console.log("Transaction Saved"))
.catch((err)=> console.error("Transaction Error"+ err))