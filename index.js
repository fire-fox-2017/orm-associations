"use strict"
let db = require("./models");
const repl = require('repl');
const replServer = repl.start({
  prompt: '> '
});

// let insertStudent = (firstname, lastname, birthday, email, tinggi, phone) => {
//   db.Student.create({
//       'first_name': firstname,
//       'last_name': lastname,
//       'birthdate': birthday,
//       'email': email,
//       'tinggi_badan': tinggi,
//       'phone': phone
//     })
//     .then(result => {
//       console.log(JSON.stringify(result.toJSON(), null, 2));
//     })
//     .catch(err => {
//       console.log("ERR Input : " + err);
//     })
// }
// let getFullname = () => {
//   db.Student.findAll()
//     .then(arrStudents => {
//       arrStudents.forEach(Students => {
//         console.log(Students.getFullName());
//       });
//     })
//   return 'Query getFullName Succes';
// }
// let getAge = () => {
//   db.Student.findAll()
//     .then(arrStudents => {
//       arrStudents.forEach(Students => {
//         console.log(Students.getAge());
//       });
//     })
//   return 'Query getAge Succes';
// }
let alls = () => {
  db.Student.getAllData(function(arrStudent) {
    arrStudent.forEach(function(student) {
      console.log(JSON.stringify(student));
    })
  });
}
let allt = () => {
  db.Teacher.getAllData(function(arrTeacher) {
    arrTeacher.forEach(function(teacher) {
      console.log(JSON.stringify(teacher));
    })
  });
}
let insertTeacher = (name, email, phone) => {
  db.Teacher.create({
      'name': name,
      'email': email,
      'phone': phone
    })
    .then(result => {
      console.log(JSON.stringify(result.toJSON(), null, 2));
    })
    .catch(err => {
      console.log("ERR Input : " + err);
    })
}
// let showTeacher = () => { Realease 1
//   db.StudentTeacher.findAll()
//     .then(arrStudents => {
//       arrStudents.forEach(student => {
//         student.getTeachers()
//           .then(arrTeachers => {
//             console.log(`${student.name} dengan Theacher : ${JSON.stringify(arrTeachers.name)}`);
//           })
//       })
//     })
//     .catch(err => {
//       console.log(err.message);
//     })
//   return `Query on to many`
// }
//Realease 2
let showTeacher = () => {
  db.Student.findAll()
    .then(arrStudents => {
      arrStudents.forEach(student => {
        student.getTeachers()
          .then(arrTeachers => {
            console.log(`${student.name} dengan Theacher : \n`);
            arrTeachers.forEach(theachers => {
              console.log(`- ${JSON.stringify(theachers.name)}\n`);
            })
          })
      })
    })
    .catch(err => {
      console.log(err.message);
    })
  return `Query Teacher`
}
let showStudent = () => {
  db.Teacher.findAll()
    .then(arrTeachers => {
      arrTeachers.forEach(theacher => {
        theacher.getStudents()
          .then(arrStudents => {
            console.log(`${theacher.name} dengan Student : \n`);
            arrStudents.forEach(students => {
              console.log(`- ${JSON.stringify(students.name)}\n`);
            })
          })
      })
    })
    .catch(err => {
      console.log(err.message);
    })
  return `Query Student`
}

replServer.context.insert = insertTeacher;
replServer.context.getAlls = alls;
replServer.context.getAllt = allt;
replServer.context.getT = showTeacher;
replServer.context.getS = showStudent;
replServer.context.getST = showTeacher;
// replServer.context.getFull = getFullname;
// replServer.context.getAge = getAge;
