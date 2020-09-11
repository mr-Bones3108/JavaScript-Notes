console.log("this is tut 44.js");

let a = "Nikhil Bhai"
a = undefined;

if(a !=undefined){
    throw new Error('This is not defined');
}
else{
    console.log('This is undefined');
}

try {
    // bhitchhj
    console.log('We are inside the block');

    // functionNikhil();

} catch (error) {
    console.log('Are you ok?');
    // jo error se try fail hua vo error ko print karne ke liye
    console.log(error);
    console.log(error.message);
}finally {console.log('Finally we will run this')}

