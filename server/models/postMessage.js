import mongoose from 'mongoose';  // used to create schema and model for mongodb


//create schema /blueprint of model /database
const postSchema = mongoose.Schema({  // creating blueprint for model in database
    title: String,
    message: String,
    creator: String,
    tags: [String],     //tags
    selectedFile: String,  // turn images to text  using react-file-base64 package dependacy
    likeCount: {
        type: Number,
        default: 0    // start count at 0
    },
    createdAt: {
        type: Date,
        default: new Date()  // start date a present date
    }
})

//turn the schema above into a model
const PostMessage = mongoose.model('PostMessage', postSchema);  //a model named PostMessage using the postSchema blueprint

export default PostMessage;


//we are exporting a PostMesage model that we can use elsewhere find, update , delete

