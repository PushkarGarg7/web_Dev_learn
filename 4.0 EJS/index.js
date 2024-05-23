import express from "express";
const app=express();
const port=3000;

const today=new Date();
//const day=today.getDay();
var day=0;
var type="a weekday";
var ad="time to work";
if(day===0 || day===6){
    type="weekend";
    ad="enjoy";
}

app.get("/", (req,res) => {
    res.render("index.ejs",{
        dayType:type,
        advice:ad,
    });
});

app.listen(port, () =>{
    console.log(`server running on ${port}`);
   
    
});