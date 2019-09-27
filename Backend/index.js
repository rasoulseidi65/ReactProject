var MongoClient = require('mongodb').MongoClient;
const expres=require('express');
const cors=require('cors');
const app=expres();
app.use(cors());

app.get('/',(req,res)=>{
res.send('fffبلیبلبیلبf')
});
app.listen(4000,()=>{
    console.log('server listen')
});
// Connect to the db
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var doc = {id:12, firstName: "Roshan", lastName: "22" };

    // insert document to 'users' collection using insertOne
    dbo.collection("customers").insertOne(doc, function(err, res) {
        if (err) throw err;
        console.log("Document inserted");
        // close the connection to db when you are done with it
        db.close();
    });
});
app.get('/add',(req,res)=>{

});
