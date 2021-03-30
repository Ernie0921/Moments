//IMPORT YOUR PACKAGES
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors';

import postRoutes from './routes/posts.js' //connecting the post.js file route


const app = express() // initialize express




//MIDDLEWARE FOR BODY-PARSER
app.use(bodyParser.json({ limit: "30mb", extended: true })); //will be sending images  that could be large
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));//  setting up body parser to we ca appropriately send our request
app.use(cors()) //(will enable cross origin request)


app.use('/posts', postRoutes) // created middleware so /posts is used in all routes in postRoutes

//connect to mongoDB atlas
const CONNECTION_URL = 'mongodb+srv://admin:admin123@cluster0.bdtvh.mongodb.net/MOMENTS?retryWrites=true&w=majority'  //connecting to YOUR mongdb URI
const PORT = process.env.PORT || 5000;  //where this will run , in heroku it will use the PORT variable 

//CONNECTING TO Database is a PROMISE FYI
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) //connect to you mongodb uri , the rest will stop errors and warning in terminal 
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`) )) //if successfully connected 
    .catch((error)=>  console.log(error.message))   //if unsuccessful

mongoose.set('useFindAndModify', false) //also avoid error in the terminal or warnings
