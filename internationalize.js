"use strict"
const db = require('./models');


console.log("test");

db.Student.findAll()
.then ( students => {
  students.forEach (student => {
    // console.log(JSON.stringify(student.toJSON()));

    student.update(
      {name: `${student.first_name} ${student.last_name}`}
    ).then ( () => { console.log(`Updated ${student.name}`) })


    // student.name = student.first_name + " " + student.last_name;
    // student.name = "";
    // student.save({fields: ['name']}).then(function() {
    //   console.log(`Updated ${student.name}`)
    // })



  })
})


// db.Student.getAllData( students => {
//   console.log("haha")
//   students.forEach (student => {
//     // console.log(JSON.stringify(student.toJSON()));
//     student.name = student.getDataValue('full_name');
    
//     student.save()
//     .then ( () => {
//       console.log(`Updated ${student.name}`)
//     })

//     // Student.update(
//     //   {name: `${student.getDataValue(full_name)}`}
//     // )
//   })

// })
