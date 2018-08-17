const{MongoClient,ObjectId} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/ToDoApp",{ useNewUrlParser: true },(err,Client)=>{

if(err)
{
    console.log("cannot connect to database");
}
else{
    console.log("connected to database succesfully");
}const db = Client.db('ToDoApp');

db.collection("Users").findOneAndUpdate({_id : new ObjectId('5b769f8177fcd2b02479ccef')},{
    $set:{
        completed:true,
        name:'aditya'
    },
    $inc:{
        age:3
    }
},
    {
        returnOriginal:false
    }
 )
.then((data)=>{
    console.log(JSON.stringify( data,undefined,2));
}),(error)=>{
    console.log("cannot be updated");
}



})