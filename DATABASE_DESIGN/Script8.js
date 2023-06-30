//Inventory Management System
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected Sucessfully');
})
.catch(()=>{
    console.log("Not Connected")
})


//Product Schema
const productSchema= new mongoose.Schema({
    name:{
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
    quantity:{
        type:Number,
        required: true
    },
    price:{
        type:Number,
        required: true
    }
})

//supplierSchema
const supplierSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    contact_Person:{
        type:String,
        required: true
    },
    contact_number:{
        type:String,
        required: true
    },
})

//purchase Schema
const purchaseSchema = new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    supplier:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Supplier'
    },
    quantity:{
        type:Number,
        required: true
    },
    unit_price:{
        type:Number,
        required: true
    },
    purchase_Date:{
        type: Date,
        required: true
    }
})

//Schema Details
const Product= mongoose.model('Product',productSchema)
const Supplier= mongoose.model('Supplier',supplierSchema)
const Purchase= mongoose.model('Purchase',purchaseSchema)

//Prduct Details
const product= new Product({
    name: 'Laptop',
    description: 'A laptop computer',
    category: 'Electronics',
    quantity: 10,
    price: 800
})
product.save()
.then(()=> console.log("Product Saved"))
.catch((err)=> console.error("Product Error"+err))

//Supplier Details
const supplier = new Supplier({
    name:"ABC",
    email:"ABC@email.com",
    contact_Person:"Vembu Ram",
    contact_number:"56789-56789"
})
supplier.save()
.then(()=> console.log("supplier Saved"))
.catch((err)=> console.error("supplier Error"+err))

//Purchase Details
const purchase = new Purchase({
    product:product.id,
    supplier:supplier.id,
    quantity:10,
    unit_price:8000,
    purchase_Date: new Date()
})
purchase.save()
.then(()=> console.log("purchase Saved"))
.catch((err)=> console.error("purchase Error"+err))
