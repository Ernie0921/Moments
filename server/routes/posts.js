//WILL HANDLE ALL THE POST THAT HAVE TO DO WITH CORS

import express from 'express'; 
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/render.js'; // IMPORTED the getPosts variable from render.js

const router = express.Router() //initialize the being able to create routes with this router 


// localhost:5000/posts
router.get('/', getPosts );  // this route will run the function in the getPost variable that was imported from render.js
router.post('/', createPost)  // this route will run the createPost function hat was imported from render.js
router.patch('/:id', updatePost)//updating 
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost)
export default router; 