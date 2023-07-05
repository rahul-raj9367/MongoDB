//Healthcare System – Store patient health records, doctor records, medical procedures, prescriptions, and more.
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
})

//Docter Schema
const doctarSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    specialization:{
        type: String,
        required: true
    }
})

//MedicalProcedure schema
const MedicalProcedureSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    duration_minutes:{
        type: Number,
        required: true
    },
    cost:{
        type: Number,
        required: true
    },
})


//Prescription schema
const  prescriptionSchema = new mongoose.Schema({
    Patient_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    },
    Doctar_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctar'
    },
    MedicalProcedure:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'MedicalProcedure'
    },
    medications:[{
        dosage:{
            type: String,
            required: true
        }
    }]
})

//Schema Models
const Patient= mongoose.model('Patient',patientSchema)
const Doctar=mongoose.model('Doctar',doctarSchema)
const MedicalProcedure= mongoose.model('MedicalProcedure',MedicalProcedureSchema)
const Prescription= mongoose.model('Prescription',prescriptionSchema)

//Patient Details
const patient= new Patient({
    patient_id:"B11",
    name:"P.Rahul Raj",
    address:"12/2 Thiyagarajar Street Mukkudal",
    gender:"male",
    contact_number:9025257223,
})
patient.save()
.then(() => console.log('Patient  saved'))
.catch(err => console.error('Error saving patient :', err));

const doctor= new Doctar({
    name:"Dr.babu",
    specialization:"Cardiology"
})
doctor.save()
.then(() => console.log('doctor  saved'))
.catch(err => console.error('Error saving doctor :', err));

//MedicalProcedure Details
const medicalProcedure= new MedicalProcedure({
    name:"'MRI Scan",
    description:"Magnetic resonance imaging scan",
    category:" closed bore and open",
    duration_minutes:10,
    cost:1000,
})
medicalProcedure.save()
.then(() => console.log('medicalProcedure  saved'))
.catch(err => console.error('Error saving medicalProcedure :', err));


//Prescription Details
const prescription = new Prescription({
    Patient_id:patient.id,
    Doctar_Id: doctor.id,
    MedicalProcedure:medicalProcedure.id,
    medications:[{
        dosage:"Take 1 capsule daily",
    }]
})
prescription.save()
.then(() => console.log('prescription  saved'))
.catch(err => console.error('Error saving prescription :', err));
