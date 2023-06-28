//Online Shopping System
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected Sucessfully');
})
.catch(()=>{
    console.log("Not Connected")
})

//user Schema
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
    address:{
        type:String,
        required: true
    },
    cart:[
        {
            product:{
                type: mongoose.Schema.Types.ObjectId,
                ref:'Product'
            },
            quantity:{
                type:Number,
                required: true
            }
        }
    ],
    orders:[
        {
            products:[
                {
                    product:{
                        type: mongoose.Schema.Types.ObjectId,
                        ref:'Product'
                    },
                    quantity:{
                        type:Number,
                        required: true
                    }
                }
            ],
            total_amount:{
                type:String,
                required: true
            },
            orderplaced_date:{
                type:Date,
                required: true
            }
        }
    ]
})

//Product Schema
const productSchema = new mongoose.Schema({
    product_Name:{
        type:String,
        required: true
    },
    product_Price:{
        type:String,
        required: true
    },
    product_Description:{
        type:String,
        required: true
    },
})

//Schema Model
const User= mongoose.model('User',userSchema)
const Product = mongoose.model('Product',productSchema)

//User Data
const user=new User({
    name:"Rahul Raj",
    email:"rahulselvan0810@gmail.com",
    password:"ABC123",
    address:"12/2 thiyagarajar street Mukkudal",
    cart:[
    ],
    orders:[
    ]
})
user.save()
.then(()=> console.log('User Saved'))
.catch((err)=> console.error('User Error:'+ err))

//product Details
const product= new Product({
    product_Name:"iphone 14",
    product_Price:"₹75,999",
    product_Description:"The iPhone 14 features a 6.1-inch (155 mm) display with Super Retina XDR OLED technology at a resolution of 2532 × 1170 pixels and a pixel density of about 460 PPI with a refresh rate of 60 Hz."
})
product.save()
.then(()=> console.log('Produced Saved'))
.catch((err)=> console.error('Product Error:'+err))

user.cart.push({
    product: product._id,
    quantity: 1
});
user.orders.push({
    products:[
       {
        product: product._id,
        quantity: 2
       }
    ],
    total_amount: product.product_Price,
    orderplaced_date:new Date()
})