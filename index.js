"use strict"
const db = require('./models');
const repl = require('repl');

let replServer = repl.start({prompt: '$_$> '});

// Seeding
// db.Student.create({first_name: "David", last_name: "Johnson", birthdate: "1990-01-02"});
// db.Student.create({first_name: "Jamie", last_name: "Lamb", birthdate: "1991-01-02"});
// db.Student.create({first_name: "Ben", last_name: "Roth", birthdate: "1988-03-14"});
// db.Student.create({first_name: "Brandin", last_name: "Cook", birthdate: "1991-11-20"});

let create = (first_name, last_name, birthdate, email, height, phone, teacher_id) => {
	db.Student.create({first_name: first_name, last_name: last_name, birthdate: birthdate, email: email, height: height, phone: phone, teacher_id: teacher_id})
	.then( student => {
		console.log(`Created student ${student.id} ${student.first_name}`)
	})
	.catch( err => {
		console.log(err.message);
	})

}



let getFullName = (id) => {
	db.Student.findById(id)
		.then(student => {
			// console.log(student.toJSON());
			console.log(student.getFullName());
		})
		.catch(err => {
			console.log(err.message);
		})

}

let getAge = (id) => {
	db.Student.findById(id)
		.then(student => {
			// console.log(student.toJSON());
			console.log(student.getAge());
		})
		.catch(err => {
			console.log(err.message);
		})

}

let getAllData = () => {
	db.Student.getAllData( students => {
		// console.log("*****")
		// console.log(students)

		students.forEach( student => {
			// console.log(JSON.stringify(student.toJSON()))
			console.log(student.id)
			console.log(student.first_name)
			console.log(student.last_name)
			console.log(student.getDataValue('full_name'))
			// console.log(student.full_name);
		})
	})
}




replServer.context.create = create;
replServer.context.getFullName = getFullName;
replServer.context.getAge = getAge;
replServer.context.getAllData = getAllData;


// ===============================================



let createTeacher = (name, email, phone) => {
	db.Teacher.create({name: name, email: email, phone: phone})
	.then( teacher => {
		console.log(`Created teacher ${teacher.id} ${teacher.name}`)
	})
	.catch( err => {
		console.log(err.message);
	})
}

let getStudentTeachers = () => {

  db.Student.findAll()
  .then ( students => {
    students.forEach(student => {
      student.getTeacher()
      .then ( teacher => {
        console.log(`${student.first_name} ${student.last_name}`)

          console.log(` - `, teacher.name)


        })
      })
    }

  )
}


let getTeacherStudents = () => {
  db.Teacher.findAll()
  .then ( teachers => {
    teachers.forEach(teacher => {
      teacher.getStudents()
      .then ( students => {
        console.log(`${teacher.name}`)
        students.forEach( student => {
          console.log(` -  ${student.first_name} ${student.last_name}`)
        })
      })
    })
  })
  
}


// createTeacher("Steve Kerr", "steve@warriors.com", "123456")
// createTeacher("Mike D'antoni", "mike@rockets.com", "123456")
// createTeacher("Greg Popovich", "greg@spurs.com", "123456")
// createTeacher("Jeff Hornacek", "jeff@knicks.com", "123456")
// createTeacher("Doc Rivers", "doc@clippers.com", "123456")
// createTeacher("Luke Walton", "luke@lakers.com", "123456")
// createTeacher("Billy Donovan", "billy@thunders.com", "123456")
// createTeacher("Tyron Lue", "tyron@cavs.com", "123456")
// createTeacher("Brad Stevens", "brad@celtics.com", "123456")




replServer.context.createTeacher = createTeacher;
replServer.context.getStudentTeachers = getStudentTeachers;

// test case
// createTeacher("Brad Jenkins", "brad@celtics.com", "0001115555")















//
