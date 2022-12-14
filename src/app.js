const express = require("express");
const app=express();
const path = require("path");
const hbs=require("hbs");
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
const Register=require("./models/register");
const  port=process.env.PORT || 8800;
require("./db/conn");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);
app.get("/",(req, res) => {
    res.render("index");
});

app.post("/register",async(req,res)=>{

    try{
        const age=req.body.age;
        if(age>=18 && age<=65){
             const register_student=new Register({
                firstname: req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                gender: req.body.gender,
                phone: req.body.phn,
                batches:req.body.batches,
                age: req.body.age,
                date:req.body.date
             });
             const registered =await register_student.save();
             res.status(201).render("index");
        }else{
           res.send("you cannot be enrolled");
        }
    }catch(error){
        res.status(400).send(error);
    }
});
app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
});