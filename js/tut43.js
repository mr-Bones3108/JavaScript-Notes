console.log("this is tut 43");


async function nikhil() {
    console.log("inside nikhil function");
     const response = await fetch('https://api.github.com/users'); 
     console.log('before response');
     const user = await response.json();
     console.log('User Resolved')
     return user;
      

    // return "nikhil";
}

console.log("Before calling nikhil")
let a = nikhil();
console.log("After calling nikhil")
console.log(a);
a.then(data => console.log(data));
console.log("Last line of this js file")

