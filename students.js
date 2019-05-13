// Create a database called 'my_first_db'.
use first_db

// Create students collection.
db.createCollection("students")

// Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
db.students.insert({name:"Steve", home_state:CA,lucky_number:3,birthday:{month:2,day:13,year:1969}})

// Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
db.students.find({home_state:{$in:["WA","CA"]}})

// Get all students whose lucky number is:
// greater than 3
// less than or equal to 10
// between 1 and 9 (inclusive)

db.students.find({lucky_number:{$gt:3}})
db.students.find({lucky_number:{$lt:3}})
db.students.find({lucky_number:{$gt:0,$lt:10}})


// Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
db.students.update({},{$set:{interests:["coding","brunck","MongoDB"]}},{upsert:false,multi:true})

// Add some unique interests for each particular student into each of their interest arrays.
db.students.update({name:"Steve"},{$push:{interests:"walking"}})

// Remove the 'taxes' interest you just added.
db.students.update({name:"Jack"},{$pop:{interests:(1)}})

// Remove all students who are from California.
db.students.remove({home_state:"CA"})

// Remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.remove({lucky_number:{$gt:5}})

// Add a field to each student collection called 'number_of_belts' and set it to 0.
db.students.update({},{$set:{number_of_belts:0}},{upsert:false,multi:true})

// Increment this field by 1 for all students in Washington (Seattle Dojo).
db.students.update( { home_state: "WA" },{ $inc: { number_of_belts: 1 }},{multi:true});

// Rename the 'number_of_belts' field to 'belts_earned'
db.students.updateMany( {}, { $rename: { "number_of_belts": "belts_earned" } } )

// Remove the 'lucky_number' field.
db.students.update(
    {},
    { $unset: { lucky_number: "" }},{multi:true} 
 )

//  Add a 'updated_on' field, and set the value as the current date.
db.students.update({},{$set:{updata_on:[""]}},{upsert:false,multi:true})
db.students.update({ }, { "$set": { updata_on: new Date() }},{multi:true} )



