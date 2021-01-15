import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// const Header =() =>{
//   const newArray = ([1, 3, 5, 7])
 
//   return newArray([1]);
// }
// console.log(Header);

// const Header =(arr) =>{
//   const newArray = []
 
//   return newArray(0);
// }
// console.log(Header[1, 3, 5, 7]);

// const ayday = arr=> arr[0]

// console.log(ayday([1, 2, 3]))

// const Array = ([])=>{
//   const ayday = munarbek(Array, [1,3]);
// }


// var array = ['a', 'b', 'c', 'd'];
// var pulled = _.pullAt(array, [1, 3]);
//  
// console.log(array);

//  
// console.log(pulled);
