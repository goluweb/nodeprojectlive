const { Types } = require('mongoose');
const database = require(__dirname+'/../../config/Database');

const student = database.Schema({

    user_id:{
        type:database.Schema.Types.ObjectId,
        ref:'admin_logins',
    
    },

    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
       
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    assign_course:[{
        type:database.Schema.Types.ObjectId,
        ref:'playList', 
      
    }],

    address:{
        type:String,
        required:true
    },
    status:{
        type:Number,
        default:1,
        required:true
    },
    added_on:{
          type:Date,
          default:new Date(),
          required:true
    }

});

const studentModel = database.model('studentModel',student);

module.exports=studentModel;