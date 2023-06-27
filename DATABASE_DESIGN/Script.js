//Library Database
const mongoose= require('mongoose');
mongoose.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected Sucessfully');
})
.catch(()=>{
    console.log("Not Connected")
})
//book Schema
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publication_date:{
        type:Date,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    copies:[
        {
            copy_id: String,
            available: Boolean
        }
    ]
})
//userSchema
const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    }
})
//Borrowing Schema
const borrowingSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book'
    },
    copy_id:{
        type:String
    },
    borrowed_date: {
        type:Date,
        required:true
    },
    return_date:{
        type: Date,
    },
    due_date:{
        type:Date,
        required: true
    }
})
//Donation Schema
const donationSchema=new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    book:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },
    donate_date:{
        type:Date,
        required:true
    }
})
//models schemas
const Book=  mongoose.model('Book',bookSchema);
const User=  mongoose.model('User',userSchema);
const Borrowing = mongoose.model('Borrowing',borrowingSchema)
const Donation= mongoose.model('Donation_Book',donationSchema)


//books
const book1= new Book({
    title:" atomic habits ",
    author:"James Clear",
    publication_date: new Date(2018-10-16),
    description:"Atomic Habits by James Clear is a comprehensive, practical guide on how to change your habits and get 1% better every day. Using a framework called the Four Laws of Behavior Change, Atomic Habits teaches readers a simple set of rules for creating good habits and breaking bad ones.",
    copies:[
        {
            copies_id:"12345",
            available: true,
        }
    ]
})
const book2= new Book({
    title:"Courage to be Disliked",
    author:"Fumitake Koga and Ichiro Kishimi",
    publication_date: new Date(2013-12-2),
    description:"The Courage to be Disliked is a book that instructs readers how to have the courage to live a happy, authentic life. All of the advice of the philosopher hinges on retraining your mind to accept yourself as you are, and in turn to accept others as they are.",
    copies:[
        {
            copies_id:"6789",
            available: true,
        }
    ]
})
book1.save()
.then(() => console.log('Book 1 saved'))
.catch(err => console.error('Error saving book 1:', err));

book2.save()
.then(() => console.log('Book 2 saved'))
.catch(err => console.error('Error saving book 2:', err));

//User
const user= new User({
    name:"Rahul Raj",
    email:"rahulselvan0810@gmail.com",
    address:"Mukkudal",
    phone:9025957223
})

user.save()
.then(() => console.log('User saved'))
.catch(err => console.error('Error saving user:', err));

//borrowing
const borrowing= new Borrowing({
    user:user.id,
    book:book1.id,
    copy_id:"123",
    borrowed_date: new Date(),
    due_date: new Date('2023-06-30')
})
borrowing.save()
.then(() => console.log('Borrowing  saved'))
.catch(err => console.error('Error saving borrowing :', err));


//Donation
const donation= new Donation({
    user:user.id,
    book:book2.id,
    donate_date: new Date(),
})

donation.save()
.then(() => console.log('Donation saved'))
.catch(() =>  console.error('Error Donation :'+err))
