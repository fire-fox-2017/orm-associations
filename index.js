'use strict'
const sqlite = require('sqlite3').verbose();

const db = require('./models');
const repl = require('repl');
const replServer = repl.start('> ')


let findAll = ()=>{
// db.Teacher.findAll()
//   .then((teachers)=>{
//     teachers.forEach((teacher)=>{
//       teacher.getStudents()
//              .then((students)=>{
//                students.forEach((student)=>{
//                  console.log(`Murid ${student.name}; Gurunya ${teacher.name}`);
//                })
//              })
//     })
//   })
db.Student.findAll()
  .then((students)=>{
    students.forEach((student)=>{
      student.getTeachers()
             .then((teachers)=>{
               teachers.forEach((teacher)=>{
                 console.log(`Murid ${student.name} Gurunya ${teacher.name}`);
               })
             })
    })
  })
}


replServer.context.find = findAll
