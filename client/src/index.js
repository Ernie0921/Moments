 import React from 'react'; //import react
 import ReactDOM from 'react-dom';  //DOM for react
 import { Provider } from 'react-redux';// provider helps keep track of store (a global state) , no need to be in that child component or child conponent , access to it anywhere 
 import { createStore, applyMiddleware, compose } from 'redux';//
 import thunk from 'redux-thunk';// 

 import reducers from './reducers';


 import App from './App'; //import the app function  from App.js file

 import './index.css';

 const store = createStore(reducers, compose(applyMiddleware(thunk)))//

 ReactDOM.render(
     <Provider store= {store}>
        <App />
     </Provider>,
    document.getElementById('root'))  //render to the DOM the App variable that will createt the div h1 app, with in a div with an id "root"