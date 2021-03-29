//create all the handlers for our routes , what it will render for each route
import PostMessage from '../models/postMessage.js' // importing the model so we can use it here 

export const getPosts = async (req, res)=> {   // aync function to so it can search for data in database ayncronouse
    //res.send('THIS WORKS')
    try {
       const postMessages =  await PostMessage.find();

       console.log(postMessages)

       res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const createPost = async (req, res)=> {  //with post request you have access to req.body
    //res.send('Post Creation')
    const post = req.body;  //post = to whatever the client enters

    const newPost = new PostMessage(post)    //create a new model with the data in the request body saved in post variable

    try { 
        await newPost.save(); //save the model that has the req.body information

        res.status(201).json(newPost)  // respond with 201 and the moel
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}
