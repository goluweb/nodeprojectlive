var database = require(__dirname+'/../../config/Database');

const playList1 = database.Schema({

    user_id:{
        type:database.Schema.Types.ObjectId,
        ref:'admin_logins',
        required:true,
    },

    course_id:{
        type:database.Schema.Types.ObjectId,
        ref:'course_name',
        required: true,
    },
    level_id:{
        type:database.Schema.Types.ObjectId,
        ref:'level_name',
        required:true,
    },
    playlist:{
        type:String,
        
    },
    thumbnail:{
        type:String,
        required:true,
    },
    status:{
        type:Number,
        default:2,
        required:true,
    },
    startDate:{
        type:Date,
        required:true,
    },
    endDate:{
        type:Date,
        required:true,
    },
    added_on:{
        type:Date,
        default: new Date(),
        required : true,
    },

});

playList1.virtual('chapters', {
    ref: 'chapter',
    localField: '_id',
    foreignField: 'playlist_id',
    justOne: false,
  });

  playList1.set('toObject', { virtuals: true });

const playList = database.model('playList',playList1);


module.exports = playList;