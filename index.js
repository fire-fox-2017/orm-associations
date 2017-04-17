"use strict"

const repl = require('repl');
var db = require('./models');

let replServer = repl.start({prompt : '>'});

let insertTeacher = (name, email, phone) => {
  db.Teacher.create({'name' : name,
                     'email' : email,
                     'phone' : phone})
  .then(teacher => {
    console.log(JSON.stringify(teacher.toJSON()), null, 2);
  })

  .catch(err => {
    console.log(err.message);
  })

  return 'Insert Teacher';
}

// let showTeacher1 = () => {
//   db.StudentTeacher.findAll()
//     .then(arrStudents => {
//       arrStudents.forEach(student => {
//         student.getTeachers()
//           .then(arrTeachers => {
//             console.log(`${student.firstName} : ${JSON.stringify(arrTeachers.name)}`);
//           })
//       })
//     })
//     .catch(err => {
//       console.log(err.message);
//     })
//
// }

let showTeacher2 = () => {
  db.Student.findAll()
    .then(arrStudents => {
      arrStudents.forEach(student => {
        student.getTeachers()
          .then(arrTeachers => {
            console.log(`${student.firstName} : \n`);
            arrTeachers.forEach(teachers => {
              console.log(`- ${JSON.stringify(teachers.name)}\n`);
            })
          })
      })
    })
    .catch(err => {
      console.log(err.message);
    })

}
let showStudent = () => {
  db.Teacher.findAll()
    .then(arrTeachers => {
      arrTeachers.forEach(teacher => {
        teacher.getStudents()
          .then(arrStudents => {
            console.log(`${teacher.name} : \n`);
            arrStudents.forEach(students => {
              console.log(`- ${JSON.stringify(students.firstName)}\n`);
            })
          })
      })
    })
    .catch(err => {
      console.log(err.message);
    })

}

// let findAll = () => {
//   db.Student.findAll()
//   .then(arrStudents => {
//     arrStudents.forEach(students => {
//       console.log(`- ${JSON.stringify(students.firstName)}\n`);
//     })
//   })
// }

// let findAll = () => {
//   db.Teacher.findAll()
//   .then(arrTeachers => {
//     arrTeachers.forEach(teachers => {
//       console.log(`- ${JSON.stringify(teachers.name)}\n`);
//     })
//   })
// }


replServer.context.insertTeacher = insertTeacher;
// replServer.context.showTeacher1 = showTeacher1;
replServer.context.showStudent = showStudent;
replServer.context.showTeacher2 = showTeacher2;
// replServer.context.findAll = findAll;
