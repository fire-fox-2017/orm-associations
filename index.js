"use strict"
const db = require('./models');
const repl = require('repl');
const sqlite = require('sqlite3').verbose();

let replServer = repl.start({
    prompt: '> '
});

let getAgeStudents = () => {
    db.Student.findAll()
        .then(students => {
            students.forEach(student => {
                console.log(student.getAge())
            })
        })
}

let getFullNameStudent = () => {
    db.Student.findAll()
        .then(students => {
            students.forEach(student => {
                console.log(student.getFullname())
            })
        })
}
let getAllData = () => {
    var all = db.Student.getAllData(function(students) {
        students.forEach(function(student) {
            console.log(student.id);
            console.log(student.first_name);
            console.log(student.last_name);
            console.log(student.full_name);
        })
    })
}

let insertStudent = (first_name, last_name, height, phone, birth_date, email) => {
    db.Student.create({
        'first_name': first_name,
        'last_name': last_name,
        'height': height,
        'phone': phone,
        'birth_date': birth_date,
        'email': email
    }).then(student => {
        console.log(JSON.stringify(student.toJSON(), null, 2));
    }).catch(err => {
        console.log(err.message);
    })
}

let assignTeacher = (idStudent, idTeacher) => {
    db.Student.update({
            TeacherId: idTeacher
        }, {
            where: {
                id: idStudent
            }
        })
        .then(student => {
            console.log(student);
        })
}

let assignTeacherStudent= (idStudent,idTeacher)=>{
  db.StudentTeacher.create({
    'StudentId':idStudent,
    'TeacherId':idTeacher
  }).then(StudentTeacher=>{
    console.log(JSON.stringify(StudentTeacher.toJSON(),null,2));
  }).catch(err=>{
    console.log(err.message);
  })

}

let teacherMinions = () => {
    db.Teacher.findAll()
        .then(arrTeacher => {
            arrTeacher.forEach(teacher => {
                teacher.getStudents()
                    .then(arrStudent => {
                        console.log(`=== ${teacher.name} ===`);
                        arrStudent.forEach(student => {
                            console.log(`--- ${student.first_name} ---`);
                        })
                    })
            })
        })
}

let studentMaster = () => {
    db.Student.findAll()
        .then(Students => {
            Students.forEach(students => {
                students.getTeachers()
                    .then(Students => {
                        console.log(`=== ${students.first_name} ===`);
                        Students.forEach(teacher => {
                            console.log(`--- ${teacher.name} ---`);
                        })
                    })
            })
        })
}


replServer.context.studentMaster = studentMaster
replServer.context.assignTeacherStudent = assignTeacherStudent
replServer.context.teacherMinions = teacherMinions
replServer.context.assignTeacher = assignTeacher
replServer.context.insertStudent = insertStudent
replServer.context.getAllData = getAllData
replServer.context.getAgeStudents = getAgeStudents
replServer.context.getFullNameStudent = getFullNameStudent
