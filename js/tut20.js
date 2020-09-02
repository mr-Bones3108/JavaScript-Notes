console.log('This is tut 20');

let impArry = ['adrak' , 'pyaz' , 'bhindi'];

// yea function (localStorage.setItem) sirf item ko set karne ke liye use hota hai 
localStorage.setItem('Name' , 'Nikhil');
localStorage.setItem('Name2' , 'Yogesh');

// array ko string mai convert kar ne ke liye json.stringify karte hai
localStorage.setItem('Sabzi' , JSON.stringify(impArry));


// Clears the entire local storage
// localStorage.clear();

// Clear a particular key-value pair
// localStorage.removeItem('Name2');

// yea function (localStorage.getItem) sirf item ko get karne ke liye use hota hai 
let name = localStorage.getItem('Name');

// jo array string mai convert hua hai usko array mai get karne ke liye Jason.parse use karte hai
name = JSON.parse(localStorage.getItem('Sabzi')); 
console.log(name);
// let name2 = localStorage.getItem('Name2');
// console.log(name2);


// sessionStorage.setItem('sessionName', 'sHarry');
// sessionStorage.setItem('sessionName2', 'sRohan');
// sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));
