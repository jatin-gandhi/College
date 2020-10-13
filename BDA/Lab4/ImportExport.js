show dbs
use test
db.createCollection("data")

db.data.find()
db.data.aggregate([
    { $group : { _id: null, sum: {$sum:"$age"} } }
])
db.data.aggregate([
    { $group : { _id: "Avg of income", avg: {$avg:"$income"} } }
])
