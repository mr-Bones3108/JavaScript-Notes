console.log('This is tut 37');

// asume that this response is comming form server

const students = [

    {name: 'nikhil', subject:'JavaScript'},
    {name: 'yogesh', subject:'Machine learning'}
]

function enrollStudent(student, callback) {
//setTimeout function states that ki mai function(student.push vala) ko 3000millisec ke bad execute kar dunga
    setTimeout(function() {
        students.push(student);
        console.log('student has been enrolled');
        callback();
    }, 1000);
}

function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name} </li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log('student have been fetched');
    }, 5000);
}

let newStudent = {name: "Bunty", subject: "Python"};
enrollStudent( newStudent , getStudents);
