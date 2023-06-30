//Patient Health Record System
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected Sucessfully');
})
.catch(()=>{
    console.log("Not Connected")
})

//Patient Schema
const patientSchema= new mongoose.Schema({
    patient_id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    contact_number:{
        type: Number,
        required: true
    },
    medical_records:[
        {
            date:{
                type: Date,
                required: true
            },
            doctar_name:{
                type: String,
                required: true
            },
            diagnosis:{
                type: String,
                required: true
            } ,
            prescription:{
                type: String,
                required: true
            },
            test:[String]
        }
    ]
})

//schema models
const Patient= mongoose.model('Patient',patientSchema)

//Patient Details
const patient = new Patient({
    patient_id:"A11",
    name:"P.Rahul Raj",
    address:"12/2 Thiyagarajar Street Mukkudal",
    gender:"male",
    contact_number:9025257223,
    medical_records:[
        {
            date:new Date,
            doctar_name:"Babu",
            diagnosis: 'Common Cold',
            prescription: 'Rest, plenty of fluids, and over-the-counter medication',
            tests: ['CBC', 'Throat swab']
        }
    ]
})

patient.save()
.then(() => console.log('Patient record saved'))
.catch(err => console.error('Error saving patient record:', err));