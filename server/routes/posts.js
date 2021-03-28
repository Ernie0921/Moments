//WILL HANDLE ALL THE POST THAT HAVE TO DO WITH CORS

import express from 'express'; 
import { getPosts } from '../controllers/render.js'; // IMPORTED the getPosts variable 

const router = express.Router() //initialize the being able to create routes with this router 


// localhost:5000/posts
router.get('/', getPosts );  // this route will run the function in the getPost variable that was imported 

export default router; 