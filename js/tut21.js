console.log('Tutorial 21 exercise 2 JavaScript');
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

// let muf = document.querySelector('.container');



let elem = document.createElement('div');
elem.className = 'shiv';
elem.id = 'rahul';
elem.innerHTML = 'Binod Name you can edit my name as well as the text';
// document.body.appendChild(elem);
document.getElementById("heading").appendChild(elem);



// var para = document.createElement("P");
//   para.innerHTML = "This is a paragraph.";
//   document.getElementById("myul").appendChild(para);
//   console.log()

// let html;
// html  = "<h1> this is heading</h1>"+
//         "<p> this is My para</p>";

//         html = html.concat('this', ' str2');
// console.log(html);