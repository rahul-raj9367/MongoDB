//Human Resources – Manage employee payrolls, vacation requests, performance reviews, and other HR related data.
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected Sucessfully');
})
.catch(()=>{
    console.log("Not Connected")
})

//Employee Schema
const employeeSchema= new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    date_of_birth:{
        type: String,
        required: true
    },
    contact_number:{
        type: Number,
        required: true
    }
})

//Payroll Schema
const payrollSchema= new mongoose.Schema({
    employee_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employee'
    },
    salary:{
        type: Number,
        required: true
    },
    pay_date:{
        type:Date,
        required: true
    },
    payment_method:{
        type: String
    },
    deductions:[
        {
            tax:{
                type: Number,
                required: true
            },
            insurance:{
                type: Number,
                required: true
            },
            other:{
                type: Number,
            }
        }
    ]
})

//vacationSchema 
const vacationSchema = new mongoose.Schema({
    employee_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employee'
    },
    start_date:{
        type:Date,
        required: true
    },
    end_date:{
        type:Date,
        required: true
    },
    duration_days:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ['Pending', 'Approved', 'Rejected']
    },
    reason:{
        type:String,
        required: true
    }
})

//performanceReview Schema
const performanceReviewSchem= new mongoose.Schema({
    employee_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employee'
    },
    reviewer:{
        type:String,
        required: true
    },
    review_date:{
        type:Date,
        required: true
    },
    rating:{
        type: Number,
        required: true
    }
})

//Schema Model
const Employee= mongoose.model('Employee',employeeSchema)
const Payroll= mongoose.model('Payroll',payrollSchema)
const Vacation=mongoose.model('Vacation',vacationSchema)
const PerformanceReview= mongoose.model('PerformanceReview',performanceReviewSchem)


//Employee Detials
const employee= new Employee({
    first_name:"Rahul",
    last_name:"Raj",
    email:"Rahulraj@gmail.com",
    date_of_birth:"08-10-2002",
    contact_number:9025957223
})
employee.save()
.then(()=> console.log('Employee Saved'))
.catch((err)=> console.error("Employee Error :"+err))

//Payroll Detials
const payroll= new Payroll({
    employee_Id:employee.id,
    salary:50000,
    pay_date: new Date('2023-07-30'),
    payment_method:"Direct Deposit",
    deductions:[{
        tax: 5000,
        insurance:1000,
        other: 1000
    }]
})
payroll.save()
.then(()=> console.log('payroll Saved'))
.catch((err)=> console.error("payroll Error :"+err))


//Vacation Detials
const vacation= new Vacation({
    employee_Id:employee.id,
    start_date: new Date('2023-07-06'),
    end_date: new Date('2023-07-16'),
    duration_days: "10 Days",
    status:"Approved",
    reason:"Vacation for personal reasons",
})
vacation.save()
.then(()=> console.log('vacation Saved'))
.catch((err)=> console.error("vacation Error :"+err))

//performanceReview Detials
const performanceReview= new PerformanceReview({
    employee_Id:employee.id,
    reviewer:"Manager",
    review_date:new Date('2023-07-30'),
    rating: 4.5
})
performanceReview.save()
.then(()=> console.log('performanceReview Saved'))
.catch((err)=> console.error("performanceReview Error :"+err))