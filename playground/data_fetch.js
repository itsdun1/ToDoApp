
const{ MongoClient,ObjectId} = require("mongodb");

MongoClient.connect("'mongodb://localhost:27017/ToDoApp",{ useNewUrlParser: true },(err,client)=>{
    if(err)
    {
      return( console.log("unable to connect to mongodb server"));
    }
    else{
        console.log("connected to atabese succesfille");
    }



    const db = client.db('ToDoApp');
    db.collection('Users').find({_id:new ObjectId('5b769fac77fcd2b02479ccfb')}).toArray().then((data)=>{
        console.log('Data Found');
        console.log(JSON.stringify(data,undefined,2))
    }),(err)=>{
        console.log('data cannot be retrived');
    }

    db.collection('Users').find().count().then((count)=>{
        console.log('Data Found');
        console.log(count);
    }),(err)=>{
        console.log('data cannot be retrived');
    }

    db.collection("Users").find({name:'aditya'}).toArray().then((data1)=>{
        console.log("data found");
        console.log(data1)
    }),(err)=>{
        console.log("cannot connect to database");
    }
  
    client.close();
});