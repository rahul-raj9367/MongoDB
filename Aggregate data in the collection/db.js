//Aggregate data in the collection

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});
const User = mongoose.model('User', userSchema);
const uri = "mongodb+srv://Rahulraj:Rahulraj-2002@cluster0.dh2u9rs.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
  // Aggregate the average age of all users
  User.aggregate([
    {
      $match:{name:"Rahul Raj"}
    },
    {
      $group:{
        _id: null,
        averageAge: { $avg: "$age" }
      }
    }
  ]).then((result) => {
    console.log(`The average age of all users is ${result[0].averageAge}`);
  }).catch((err) => {
      console.error(err);
  });

}).catch((err) => {
  console.error(err);
});
