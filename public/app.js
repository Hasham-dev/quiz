// console.log('Hello World');

///Checking Objects


// var bioData = {
//     firstName: 'Hasham',
//     lastName: 'Minhas',
//     surName: 'Vakani'
// }

// console.log(`Hey ! my name is ${bioData.firstName} ${bioData.lastName} ${bioData.surName}`);


// using javascript contructor


// function Students(roll,name){
//     this.name = name;
//     this.roll = roll;
// }


// var studentOne = new Students('Hasham',001);
// var studentTwo = new Students('Usman',002);


// Testing prototypes


// function Students(name ,roll){
//     this.name = name;
//     this.roll = roll;


    // this.getName = function(){
    //     return this.name;
    // }
// }
// Demo prototype

// Students.prototype.getName = function(){
//     return this.name
// }

// var studentOne = new Students('Hasham',001);
// var studentTwo = new Students('Usman',002);

// console.log(studentOne);


// Finding property using "IN"
// console.log( 'roll' in studentTwo);


// returning Object property
// for (var prop in studentTwo){
//     console.log(prop);
// }

// return prop with value
// for (var prop in studentTwo){
//     console.log(prop,studentTwo[prop]);
// }



//// Making Firebase database

function saveData(){
    var name = document.getElementById('name');
    var roll = document.getElementById('roll');

    var student = {
        name: name.value,
        roll: roll.value
    }

    console.log(`Student Name is ${student.name} & roll was ${student.roll}`);


    // adding data
    firebase.database().ref('Student/student1').push(student)

}
