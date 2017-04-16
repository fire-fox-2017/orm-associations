"use strict"

const repl = require('repl');
//write your code here
let replServer = repl.start({
    prompt: '> '
});

let db = require('./models')

let data = {
    name: 'Butet',
    birth_date: '1953-10-03',
    email: 'butet@gmail.com',
    height: '160',
    phone: 082212345678
}

let insertStudent = (student) => {
    db.Student.create({
            name: student.name,
            birth_date: student.birth_date,
            email: student.email,
            height: student.height,
            phone: student.phone
        })
        .then(student => {
            console.log(JSON.stringify(student.toJSON(), null, 2));
        })
        .catch(err => {
            console.log(err.message);
        })
    return 'Insert student'
}

let data = {
    name: 'Cobaemail',
    email: 'ucok@gmail.com',
    phone: '089123128934'
}

let insertTeacher = (teacher) => {
    db.Teacher.create({
            name: teacher.name,
            email: teacher.email,
            phone: teacher.phone
        })
        .then(teacher => {
            console.log(JSON.stringify(teacher.toJSON(), null, 2));
        })
        .catch(err => {
            console.log(err.message);
        })

    return 'Insert teacher'
}

let insertStudentTeacher = (student_id, teacher_id) => {
    db.StudentTeacher.create({
            student_id: student_id,
            teacher_id: teacher_id
        })
        .then(studentteacher => {
            console.log(JSON.stringify(studentteacher.toJSON(), null, 2));
        })
        .catch(err => {
            console.log(err.message);
        })
    return `Insert Student_id and Teacher_id`
}

let getStudentTeacher = () => {
    db.Student.findAll()
        .then(students => {
            students.forEach(student => {
                student.getTeachers()
                    .then(teachers => {
                        console.log(`--- ${student.name} ---`);
                        teachers.forEach(teacher => {
                            console.log(`--- ${teacher.name} ---`);
                        })
                    })
            })
        })
        .catch(err => {
            console.log(err.message);
        })
    return `Get students and their teachers`
}

let getTeacherStudent = () => {
    db.Teacher.findAll()
        .then(teachers => {
            teachers.forEach(teacher => {
                teacher.getStudents()
                    .then(students => {
                        console.log(`--- ${teacher.name} ---`);
                        students.forEach(student => {
                            console.log(`--- ${stuent.name} ---`);
                        })
                    })
            })
        })
        .catch(err => {
            console.log(err.message);
        })
    return `Get teachers and their students`
}

// let getFullNameStudent = () => {
//     db.Student.findAll()
//         .then(students => {
//             students.forEach(student => {
//                 console.log(student.getFullName());
//             })
//         })
// }
//
// let getAgeStudent = () => {
//     db.Student.findAll()
//         .then(students => {
//             students.forEach(student => {
//                 console.log(student.getAge());
//             })
//         })
// }
//
// let getAllDataStudent = () => {
//     db.Student.getAllData(function(students) {
//         students.forEach(function(student) {
//             console.log(student.id);
//             console.log(student.name);
//             console.log(student.name);
//             console.log(student.birth_date);
//         })
//     })
// }

replServer.context.insertStudent = insertStudent
replServer.context.insertTeacher = insertTeacher
replServer.context.insertStudentTeacher = insertStudentTeacher
replServer.context.getStudentTeacher = getStudentTeacher
replServer.context.getTeacherStudent = getTeacherStudent