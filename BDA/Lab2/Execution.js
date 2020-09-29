use Company

db.createCollection("Employee")
db.createCollection("Department")
show collections

// Inserting records into Employee
db.Employee.insert({_id: 1,name: "Ayush", age: 25, salary: 120000, position: "CEO"})
db.Employee.update({_id: 2,name: "Sarvesh", age: 26, salary: 580000},{$set:{position: "CFO"}},{upsert:true})
db.Employee.save({_id: 3,name: "Rahul", age: 30, salary: 500000, position: "Junior Associate"})
db.Employee.find()

// Inserting records into Department
db.Department.insert({_id:1,Name:"IT",NoOfEmp:200,HOD:"Aditya"})
db.Department.update({_id:2,Name:"HR",NoOfEmp:100},{$set:{HOD:"Jatin"}},{upsert:true})
db.Department.save({_id:3,Name:"Customer Division",NoOfEmp:300,HOD:"Akash"})
db.Department.find()

//Updating field of document
db.Employee.update({_id: 1},{$set:{department: 1002}})
db.Employee.update({_id: 2},{$set:{department: 1003}})
db.Employee.update({_id: 3},{$set:{department: 1008}})
db.Employee.find()

//Removing a field of document
db.Employee.update({_id: 2},{$unset:{age: 26}})

//Select only employee name and department number whose department number falls between 1001 to 1005
db.Employee.find({department: {$gt : 1000, $lt : 1006}}).pretty() 

//Select employee documents whose name begins with 'A'
db.Employee.find({name:/^A/}).pretty()

//Select employee document s whose age is greater than 30
db.Employee.find({age : {$gt : 28}}).pretty()
