"use strict"

const Sequelize = require("sequelize");
const db = require("./models");
const repl = require("repl");
const replServer = repl.start({prompt: "> "});

let Student = db.Student;
let Teacher = db.Teacher;
let StudentTeacher = db.StudentTeacher;

let addStudent = (firstname, lastname, birthdate, height, email, phone) => {
  db.Student.create({"first_name": firstname, "last_name": lastname, "birth_date": birthdate, "height": height, "email": email, "phone": phone})
    .then((data) => {
      console.log("Student is successfully registered into the table.");
    })
    .catch((err) => {
      console.log("Error: " + err);
    });
}

let addTeacher = (name, email, phone) => {
  db.Teacher.create({"name": name, "email": email, "phone": phone})
    .then((data) => {
      console.log("Teacher is successfully registered into the table.");
    })
    .catch((err) => {
      console.log("Error: " + err);
    });
}

let assignStudentTeacher = (student_id, teacher_id) => {
  if (isStudentIdExist(student_id)) {
    StudentTeacher.create({"student_id": student_id, "teacher_id": teacher_id})
      .then((data) => {
        console.log("a Student has been assigned to a Teacher.");
      }).catch((err) => {
        console.log("Error: " +err);
      });
  } else {
    console.log("Student id is not found.");
  }
}

let getFullName = () => {
  db.Student.findAll()
    .then((students) => {
      students.forEach((student) => {
        console.log(student.getFullName());
      });
    })
    .catch();
}

let getAge = () => {
  db.Student.findAll()
    .then((students) => {
      students.forEach((student) => {
        console.log(student.getAge());
      });
    })
    .catch();
}

let showStudents = () => {
  Student.getAllData((students) => {
    students.forEach((student) => {
      console.log(`id: ${student.id}, name: ${student.full_name}, email: ${student.email}, height: ${student.height} cm, phone: ${student.phone}`);
    });
  });
}

let showTeachers = () => {
  Teacher.getAllData((teachers) => {
    teachers.forEach((teacher) => {
      console.log(`id: ${teacher.id}, name: ${teacher.name}, email: ${teacher.email}, phone: ${teacher.phone}`);
    });
  });
}

let showStudentTeachers = () => {
  StudentTeacher.getAllData((rows) => {
    rows.forEach((row) => {
      console.log(JSON.stringify(row));
      // console.log(`id: ${row["id"]}, student_id: ${row.student_id}, teacher_id: ${row.teacher_id}`);
    });
  });
}

let deleteStudentTeacher = (id) => {
  StudentTeacher.delete(id);
}

let getAllData = () => {
  db.Student.getAllData((students) => {
    students.forEach((student) => {
      console.log(student.id);
      console.log(student.first_name);
      console.log(student.last_name);
      console.log(student.full_name);
    });
  });
}

let StudentIdArr = [];
let fillStudentsIdArr = () => {
  Student.getAllData((students) => {
    students.forEach((student) => {
      StudentIdArr.push(student.id);
    });
  });
}
let isStudentIdExist = (id) => {
  let found = 0;
  for (let i = 0; i < StudentIdArr.length; i++) {
    if (StudentIdArr[i] === id) {
      found ++;
    }
  }
  if (found > 0) {
    return true;
  } else {
    return false;
  }
}

let TeacherIdArr = [];
let fillTeachersIdArr = () => {
  Teacher.getAllData((teachers) => {
    teachers.forEach((teacher) => {
      TeacherIdArr.push(teacher.id);
    });
  });
}
let isTeacherIdExist = (id) => {
  let found = 0;
  for (let i = 0; i < TeacherIdArr.length; i++) {
    if (TeacherIdArr[i] === id) {
      found ++;
    }
  }
  if (found > 0) {
    return true;
  } else {
    return false;
  }
}




fillStudentsIdArr();
fillTeachersIdArr();
replServer.context.addStudent = addStudent;
replServer.context.addTeacher = addTeacher;
replServer.context.getFullName = getFullName;
replServer.context.getAge = getAge;
replServer.context.getAllData = getAllData;
replServer.context.Student = Student;
replServer.context.Teacher = Teacher;
replServer.context.showStudents = showStudents;
replServer.context.showTeachers = showTeachers;
replServer.context.showStudentTeachers = showStudentTeachers;
replServer.context.assignStudentTeacher = assignStudentTeacher;
replServer.context.deleteStudentTeacher = deleteStudentTeacher;
