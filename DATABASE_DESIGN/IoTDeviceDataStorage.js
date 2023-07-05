//IoT Device Data Storage – Collect and store time-series sensor data from IoT devices.
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected Sucessfully');
})
.catch(()=>{
    console.log("Not Connected")
})

//Iot Device Data Schema 
const iotDeviceDataSchema = new mongoose.Schema({
    device_id:{
        type: String,
        required:true
    },
    Sensor_type:{
        type: String,
        required:true
    },
    value:{
        type: Number,
        required:true
    },
    created_time:{
        type: Date,
        required:true
    }
})

//Schema Model
const IoTDeviceData= mongoose.model("IoTDeviceData",iotDeviceDataSchema)

//iot device details
const iotData1= new IoTDeviceData({
    device_id:"Arduino UNO",
    Sensor_type:"Temperature",
    value:25.5,
    created_time: new Date()
})
iotData1.save()
.then(()=> console.log("Iot Data 1 Saved"))
.catch((err)=> console.error("Iot Data 1 error"+ err))

const iotData2= new IoTDeviceData({
    device_id:"Arduino Mega",
    Sensor_type:"humidity",
    value:60.5,
    created_time: new Date()
})
iotData2.save()
.then(()=> console.log("Iot Data 2 Saved"))
.catch((err)=> console.error("Iot Data 2 error"+ err))

const iotData3= new IoTDeviceData({
    device_id:"Arduino NANO",
    Sensor_type:" pressure",
    value: 1013.25,
    created_time: new Date()
})
iotData3.save()
.then(()=> console.log("Iot Data 3 Saved"))
.catch((err)=> console.error("Iot Data 3 error"+ err))