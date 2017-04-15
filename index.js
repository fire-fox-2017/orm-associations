"use strict"
let model = require('./models')

const repl = require('repl');

//TEST PERTAMA ONE TO MANY
function studentsFindAll(){
  model.Student.findAll()
               .then(function(students){
                 students.forEach(function(student){
                   student.getTeacher()
                   .then(function(teacher){
                       console.log('Nama Murid : ' +student.first_name)
                       console.log('Nama Guru :'+teacher.name);
                   })
                   .catch(function (err) {
                     console.log(err.message)
                   })
                 })
               })
}

function teachersFindAll(){
  model.Teacher.findAll()
               .then(function(Teachers){
                 Teachers.forEach(function (teacher){
                   teacher.getStudents()
                          .then(function (students){
                            students.forEach(function (student) {
                              console.log('Guru : '+teacher.name)
                              console.log('Student : '+ student.first_name+' '+student.last_name);
                            })
                          })
                 })
               })
}

function findById(id){
  model.Student.findById(id)
               .then(function(student){
                   student.getTeacher()
                   .then(function(teacher){
                       console.log('Nama Murid : ' +student.first_name)
                       console.log('Nama Guru :'+teacher.name);
                   })
                   .catch(function (err) {
                     console.log(err.message)
                   })
               })
}


/////////////////////////////////////////////////////////////////////////////////////////

////MANY TO MANY
function studentFindById(id){
  model.Student.findById(id)
                .then(function(student){
                  console.log(student.first_name+' '+student.last_name)
                  student.getTeachers()
                  .then(function (teachers){
                    teachers.forEach(function (teacher){
                      console.log(teacher.name);
                    })
                  })
                })
}

function teacherFindById(id){
  model.Teacher.findById(id)
              .then(function (teacher){
                console.log(teacher.name)
                teacher.getStudents()
                        .then(function(students){
                          students.forEach(function(student){
                            console.log(student.first_name+' '+student.last_name)
                          })
                        })
              })
}



let start = repl.start("> ")
start.context.studentsFindAll = studentsFindAll
start.context.teachersFindAll = teachersFindAll
start.context.findById = findById

start.context.studentFindById = studentFindById
start.context.teacherFindById = teacherFindById
