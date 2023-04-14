const mongoose =  require('mongoose');
require('dotenv').config();
const database = process.env.DB_NAME;


mongoose.connect(database,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
  console.log('Connected to database!');
}).catch((error) => {
    console.log('Connection failed!', error);
});

module.exports = mongoose;
