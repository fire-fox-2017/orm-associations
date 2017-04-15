"use strict"

const db = require('./models');
const repl = require('repl');
const replServer = repl.start({prompt: '> '})

db.Student.getAllData(function(students){
   console.log("===============get All Data=================");
   students.forEach(function(student) {
     console.log(`ID : ${student.id}`);
     console.log(`firstName : ${student.first_name}`);
     console.log(`lastName  : ${student.last_name}`);
     console.log(`full Name : ${student.first_name} ${student.last_name}`);
     console.log(`birthdate: ${student.birthdate.getDate()}-${student.birthdate.getMonth() + 1}-${student.birthdate.getFullYear()}`);
     console.log(`Age : ${student.getAge()}\n`);
   });
 });

let assignStudentToTeacher = () => {
  db.Teacher.findAll().then(function(teachers) {
          let ids = 0;
          let promisesOfTeacher = [];
          for (var i = 0; i < teachers.length; i++) {
              promisesOfTeacher.push(new Promise(function(resolve, reject) {
                  ids = teachers[i].id;
                  if (ids != 0) {
                      resolve(ids)
                      //console.log(ids);
                  } else {
                      reject('err')
                  }
              }))
          }

          Promise.all(promisesOfTeacher).then(function(ids) {
            db.Student.findAll().then(function(students){

               let j=0;
               let k=0;
               while(j<=students.length){
                 for (var i = 0; i < ids.length; i++) {
                   db.StudentTeacher.create({
                       teacherId: ids[i],
                       studentId: students[j].id
                   })
                   j++
                 }
               }

            })
          }).catch(function(err) {
              console.log(err);
          })
      })

}


// let createTeacher = (name, email, phone) => {
//   db.Teacher.create({name: name, email: email, phone: phone})
//   .then(teacher => {
//     console.log(`Created teacher ${teacher.id} ${teacher.name}`)
//   })
//   .catch(err => {
//     console.log(err.message);
//   });
// }


let data = {
   firstname : "Testing",
   lastname : "Rahasia",
   birthdate : new Date('1991-02-12'),
   email : "mixedsad@gmail.com",
   phone : "08129912099",
   height : "150"
 }

let addStudent = () => {
   db.Student.create({
    first_name: data.firstname,
    last_name: data.lastname,
    birthdate: data.birthdate,
    email: data.email,
    height: data.height,
    phone: data.phone
   })
   .then(() => {
      console.log('success add data');
   })
   .catch((err) => {
      console.log(err);
   });
     
 }

replServer.context.addStudent = addStudent;
replServer.context.assign = assignStudentToTeacher;


// addStudent();

