//Employee Database
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
    employee_name:{
        type:String,
        required: true
    },
    employee_id:{
        type:String,
        required: true
    },
    employee_department:{
        type:String,
        required: true
    },
    employee_position:{
        type:String,
        required: true
    },
    employee_address:{
        type:String,
        required: true
    },
    hire_date:{
        type:Date,
        required: true
    },
    employee_Contact_number:{
        type:Number,
        required: true
    },
    employee_salary:{
        type:String,
        required: true
    }
})
//Schema Model
const Employee=mongoose.model('Employee',employeeSchema)

//Employee Date
const employee=new Employee({
    employee_name:"Rahul Raj",
    employee_id:"12exc45",
    employee_department:"it consultancy and services",
    employee_position:"Full Stack Developer",
    employee_address:"12/2 Thiyagarajar street Mukkudal",
    hire_date: new Date('2022-02-12'),
    employee_Contact_number:9025957223,
    employee_salary:"7 lakh per annum"
})
employee.save()
.then(()=> console.log("Empolyee Saved"))
.catch((err)=> console.error("Employee Error:"+ err));