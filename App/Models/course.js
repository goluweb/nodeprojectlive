var database = require(__dirname+'/../../config/Database');


const course = new database.Schema({

    courseName:{
        type:String,
        require:true,
    },

    courseImage:{
        type:String,
        require:true,
    },

    status:{
        type:Number,
        default:1,
    },

    date:{
        type:Date,
        default: new Date(),

    }

});

const courseObj = database.model('course_name',course);

module.exports=courseObj;