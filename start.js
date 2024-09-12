const express = require("express");
const bodyparser = require("body-parser");
const users = require("./db/data").users;

const port = process.env.port || 4000;

const app = express();

app.use(express.json());

app.get("/getdata",(req,res)=>{
    res.send({users});
});

app.get("/getdata/:id",(req,res)=>{
    const id = req.params.id;

    const pos = users.findIndex(users=>users.id === id)
    res.send(users[pos]);
});

app.post("/savedata",(req,res)=>{
    const data = req.body;
    if(data.age>=4 && data.age <= 130) 
    {
        users.push(data);
        console.log(data);
        res.send({message : "the data saved succesfully"});
    }
    else{
        res.send({message : "the data is not valid"});
    }
});

app.put("/updatedata/:id",(res,req)=>{
    const id = req.params.id;
    const data = req.body;
    const pos = users.findIndex(users=>users.id === id)
    if(pos != -1)
    {
        users[pos] = data;
        res.send({message : "sucessfully updated data"});
    }
    else{
        res.send({message : "the id does not exist"});
    }
});

app.delete("/deletedata/:id",(req,res)=>{
    const id = req.params.id;
    const pos = users.findIndex(users=>users.id === id);
    if(pos != -1){
        users[pos].isDeleted = true;
        res.send({message : "The data is sucefully set to be deleted"});
    }
    else{
        res.send({message : "the entered id is not in our database"});
    }
});

app.listen(port,()=>{
    console.log(
        `The server is running on port ${port}`
    );
});