
const expres=require('express');
const cors=require('cors');
const app=expres();
app.use(cors());
//Connect DB
// newdb is the new database we create
var url = "mongodb://localhost:27017/mydb";
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
// make client connect to mongo service
MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    db.close();
});
app.get('/customer',(req,res)=>{
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        /*Return only the documents with the address "Park Lane 38":*/
        var query = "select * from customers";
        dbo.collection("customers").find(query).toArray(function(err, result) {
            if (err) {
                return res.send(err);
            }
            else
            {
                return res.json({
                    data:result
                });
            }
            db.close();
        });
    });

});
app.listen(4000,()=>{
    console.log('server listen')
});

app.get('/addCustomer',(req,res)=> {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
// document to be inserted
        var dbo = db.db("mydb");
        // var doc = {id: '3', firstName: "Roshan", lastName: "22"};
        dbo.collection("customers").insertOne(req.query, function (err, res1) {
            if (err) {
                return res.send(err);
            }
            else{
                return res.send('SUCCED!!');
            }
            // close the connection to db when you are done with it
            db.close();
        });
        // res.send('insert customer succed!!');
    });
});
