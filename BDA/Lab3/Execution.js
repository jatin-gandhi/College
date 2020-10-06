//1
use Student
db
show dbs
db.createCollection('StudentDetails')
db.StudentDetails.insert({rollNo: 1,name: "Ayush", age: 21, contactNo: 9988776655, email: "ayush@gmail.com"})
db.StudentDetails.insert({rollNo: 9,name: "Aakash", age: 21, contactNo: 9988776632, email: "aakash@gmail.com"})
db.StudentDetails.insert({rollNo: 10,name: "Hritik", age: 21, contactNo: 9988776651, email: "hritik@gmail.com"})
db.StudentDetails.insert({rollNo: 11,name: "Aditya", age: 21, contactNo: 9988776653, email: "aditya@gmail.com"})
db.StudentDetails.insert({rollNo: 21,name: "Jatin", age: 21, contactNo: 9988776658, email: "jatin@gmail.com"})	


db.StudentDetails.update({rollNo:10},{$set:{email:"updatedmail@gmail.com"}})


db.StudentDetails.update({rollNo:11},{$set:{name:"Anjali"}})


//2

db.createCollection('Customers')
db.Customers.insert({_id:1,accBal:100000,accType:"Savings"})
db.Customers.insert({_id:2,accBal:200000,accType:"Z"})
db.Customers.insert({_id:3,accBal:300000,accType:"Current"})
db.Customers.insert({_id:4,accBal:400000,accType:"Z"})
db.Customers.insert({_id:5,accBal:500000,accType:"Savings"})
db.Customers.find()
db.Customers.find({accBal: {$gt: 1200}, accType: {$eq: "Z"}})
db.Customers.aggregate([
    {   
        $group: {
            _id: "$_id",
            min_bal: {$min: "$accBal"},
            max_bal: {$max: "$accBal"}
        }
    }
])
