import * as api from '../api';

//Action Creators
export const getPosts = () =>  async (dispatch) => {
    const action = { type: 'FETCH_ALL', payload: [] }

    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data})

    } catch (error) {

        console.log(error.message)
    }

}

export const createPost = (post) => async (dispatch) => {  //
    try {
        const { data } = await api.createPost(post);   //create a post api request to our backend server

        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error);
    }
    
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: 'UPDATE', payload: data})
    } catch (error) {
        console.log(error)
    }
}

//an action is just an object with the type and payload 