
require('dotenv').config()
const express=require('express')

const mongoose=require('mongoose')

const cors =require('cors')
const fileupload=require('express-fileupload')

const cookieparser =require('cookie-parser')


const app=express()

app.use(express.json())

app.use(cors())

app.use(cookieparser())

app.use(fileupload({

     useTempFiles:true
}))

const  userRouter=require("./src/routes/userRouter")





app.use("/user",userRouter);
app.use('/api',require('./src/routes/catogoryRouter'))
app.use('/api',require('./src/routes/upload'))
app.use('/api',require('./src/routes/productRouter'))







const URL=process.env.MONGO_URL


mongoose.connect(URL,{

//   useCreateIndex:true,
//   useFindAndModify:false,
  useNewUrlParser:true,
  useUnifiedTopology:true


},err=>{

  if(err)throw err;
 
 
  console.log("connected to MongoDb")

})

const PORT = process.env.PORT||5000
app.listen(PORT,()=>{

 console.log('Server is running on port',PORT)

})
