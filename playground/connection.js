const conn = require("mongodb").MongoClient;
conn.connect("'mongodb://localhost:27017/ToDoApp",{ useNewUrlParser: true },(err,client)=>{
    if(err)
    {
      return( console.log("unable to connect to mongodb server"));
    }
    else{
        console.log("connected to atabese succesfille");
    }
//     const db = client.db('ToDoApp');
//     db.collection('ToDos').insertOne({
//         text:'to wash clothes on friday',
//         completed:false
//     },
//     (err,data)=>
//                 {
//     if(err)
//     {
//         console.log("unable to add to database");
//     }
//     else
//     {
//         console.log("successfully added to database");
//         console.log(data.ops);
//     }
// })



    const db = client.db('ToDoApp');
    db.collection('Users').insertOne({
        name:"aditya",
        age:19,
        Location:'Pune'
    },(err,data)=>
{
    if(err)
    {
        console.log("unable to add data");

    }
    else{
        console.log(JSON.stringify(data.ops,undefined,2))
    }
})
    client.close();
});