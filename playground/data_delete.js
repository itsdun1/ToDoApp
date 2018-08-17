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
    db.collection('Users').deleteMany({name:'aditya'}).then(()=>
{
    console.log("data_deleted");
}),(Err)=>{
    console.log("data cannot be deleted");
}


    db.collection('Users').findOneAndDelete({_id: new ObjectId('5b715cd088eca52edce09d22')}).then((data)=>{
        console.log(`data_deleted ${JSON.stringify(data,undefined,2)}`);
    }),(err)=>{
        console.log('data cannot be deleted');
    }

});