var express = require('express');
const app = express();
const ejs = require('ejs');
app.set('view engine', 'ejs');
const path = require('path');
const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const flash = require('connect-flash');
app.use(cors())
app.use(session({
  cookie:{
    secure: true,
    maxAge:60000
},
store: new RedisStore(),
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));
app.use(flash());

// const corsOption ={
//   origin:''
// }


app.use(bodyParser.urlencoded({ extended: true }));


const localPath = path.join(__dirname,'./public/');
app.use(express.static(localPath));

const Index_controllers = require(__dirname+'/App/Controllers/admin/Index_controllers');
const dashboardController = require(__dirname+'/App/Controllers/admin/dashboard');
const userController = require(__dirname+'/App/Controllers/admin/userController');
const courseController = require(__dirname+'/App/Controllers/admin/courseController');
const levelCourse = require(__dirname+'/App/Controllers/admin/LevelController');
const chapterController = require(__dirname+'/App/Controllers/admin/chapterController');
const teacherController = require(__dirname+'/App/Controllers/admin/teacherController');
const taskController = require(__dirname+'/App/Controllers/admin/taskController');
const contactController = require(__dirname+'/App/Controllers/admin/contact');
const studentController = require(__dirname+'/App/Controllers/admin/studentController');
const attendance = require(__dirname+'/App/Controllers/admin/attendance.js');
const adminSessionAuth = require(__dirname+'/App/middleware/adminAuthCheck'); //middleware for session check
const todoController = require(__dirname+'/App/Controllers/admin/TodoController')
const helper = require(__dirname+'/App/Helper/HelperClass'); //helper class

app.use(helper);
// Api
const inqueryController = require(__dirname+'/App/Controllers/api/Inquery');

app.use('/inquery',inqueryController);
// Api
app.get('/',(req,res)=>{
  res.send('working1');
})
app.use('/admin', Index_controllers);
app.use('/dashboard',adminSessionAuth,dashboardController);
app.use('/users',adminSessionAuth,userController);
app.use('/course',adminSessionAuth,courseController);
app.use('/level',adminSessionAuth,levelCourse);
app.use('/chapter',adminSessionAuth,chapterController);
app.use('/teacher',adminSessionAuth,teacherController);
app.use('/contact',adminSessionAuth,contactController);
app.use('/student',adminSessionAuth,studentController);
app.use('/task',adminSessionAuth,taskController);
app.use('/todo',adminSessionAuth,todoController);
app.use('/attendance',adminSessionAuth,attendance)



app.listen(port);   
