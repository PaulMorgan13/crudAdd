const path = require("path")
const express = require("express")
const dotenv =  require("dotenv")    
const { engine } = require('express-handlebars')
const connectDB = require("./config/db.js")
const morgan = require("morgan") 
const session = require("express-session")
const passport = require("passport")



// Load config
dotenv.config({ path: './config/config.env' })


// Passport Config  

require("./config/passport")(passport)









connectDB() 
const app = express()      

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//handle bars
app.engine('handlebars', engine({defaultLayout: 'main', extname: '.handlebars'}));
app.set('view engine', 'handlebars'); 
app.set('views', "./views");
  
//session 

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}))





//passport middleware 
app.use(passport.initialize())
app.use(passport.session())



//static folder 
app.use(express.static(path.join(__dirname,'public')))





app.use("/",require("./routes/index"))



const PORT = process.env.PORT || 3000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)