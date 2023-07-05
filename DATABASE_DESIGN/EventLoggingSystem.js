//Event Logging System – Track logs for application performance metrics, user activity, and system errors.
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected Sucessfully');
})
.catch(()=>{
    console.log("Not Connected")
})

//Log Schema
const logSchema= new mongoose.Schema({
    type:{
        type: String,
        enum: ['Application Performance', 'User Activity', 'System Error']
    },
    timestamp:{
        type: Date,
        default: Date.now
    },
    message:{
        type: String,
        required: true
    },
    details:{
        type: Object,
        required: true
    },  
})

//Schema Model
const Log=mongoose.model('Log',logSchema)

//Create a new log entry for application performance metrics
const applicationperformanceLog = new Log({
    type:"Application Performance",
    message:"Page Load Time",
    details:{
        page: '/home',
        loadTime: 1200, //milliseconds
    }
})
applicationperformanceLog.save()
.then(()=> console.log("Application Performance Log Saved"))
.catch((err)=> console.error("Application Performance Log Error "+ err))

//Create a new log entry for user activity
const userActivity= new Log({
    type:"User Activity",
    message:"User Logged in",
    details:{
        userId:"user123",
        action:"login",
    }
})
userActivity.save()
.then(()=> console.log("User Activity Log Saved"))
.catch((err)=> console.error("User Activity Log Error "+ err))

//create a new log entry for System Error
const SystemError = new Log({
    type:"System Error",
    message:"Database connection failed",
    details:{
        error: 'Connection timeout',
        timestamp: new Date()
    }
})
SystemError.save()
.then(()=> console.log("System Error Log Saved"))
.catch((err)=> console.error("System Error Log Error "+ err))