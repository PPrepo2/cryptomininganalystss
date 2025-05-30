
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const mongoose  = require('mongoose');
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const { requireAuth, checkUser } = require('./server/authMiddleware/authMiddleware');


const app = express();
const PORT = 5500 || process.env.PORT;

//middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(cors());
// Configure file-upload to accept multiple files
app.use(fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit per file (adjust as needed)
    useTempFiles: true, // Use temp files for large uploads
    tempFileDir: '/verfiy/' // Temporary directory (ensure this exists or adjust)
}));
app.use(methodOverride('_method'));

// Configure session (flash requires session)
app.use(session({
    secret: 'your-secret-key', // Replace with a secure secret
    resave: false,
    saveUninitialized: false
}));

// Initialize flash
app.use(flash());

// Make flash messages available to all templates
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success');
    res.locals.error_msg = req.flash('error');
    next();
});

// set view engine
app.set('view engine', 'ejs');


//DB config
const db ='mongodb+srv://pius1:pius123@webdevelopment.xav1dsx.mongodb.net/cryptomining';
// connect to mongodb
mongoose.connect(db)
.then(()=>{
    console.log('MongoDB Connected')
})
.catch(err =>{console.log(err)})


app.get('*', checkUser);
app.use('/', require('./server/Route/indexRoute'));
app.use('/',requireAuth, require('./server/Route/userRoute'));
app.use('/', requireAuth, require('./server/Route/adminRoute'));

app.listen(PORT, console.log(`Server running on  ${PORT}`));

 
