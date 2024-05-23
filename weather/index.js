import express from "express";
import bp from "body-parser";
import axios from "axios";

const app=express();
app.use(express.urlencoded({extended:true}));


const port=3000;

let t;

app.get("/",(req,res) =>{
    res.render("index.ejs",{c:t});
});

app.post("/submit",async(req,res) =>{
    try{
    const cityname=req.body.city;
    const key="3b57e77a8038f0ee45e018159b415109";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`;
    const response=await axios.get(url);
    t=response.data.main.temp-273;
    res.redirect("/");



    }
    catch(error){
        console.log("error");
    }

});

app.listen(port,() => {
    console.log(`server @ ${port}.`);
});
