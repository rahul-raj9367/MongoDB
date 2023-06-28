//Student Record System
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected Sucessfully');
})
.catch(()=>{
    console.log("Not Connected")
})

//Student Schema
const StudentSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    roll_no:{
        type: Number,
        required: true
    },
    student_id:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    grade:{
        type: String,
        required: true
    },
    contact_number:{
        type: Number,
        required: true
    },
    course:[
        {
            course_name:{
                type: String,
                required: true
            },
            grade:{
                type: String,
                required: true
            }
        }
    ]
})
//Schema Model
const Student = mongoose.model('Student',StudentSchema)

//Student Data
const student= new Student({
    name:"Rahul Raj",
    roll_no:950620105005,
    student_id:"au950620105005",
    gender:"male",
    grade:"A+",
    contact_number:9025957223,
    course:[
        {
            course_name:"OOPS Laboratory",
            grade:"O"
        }
    ]
})
student.save()
.then(()=>console.log('Student Saved'))
.catch((err)=> console.error('Student Error: '+err))