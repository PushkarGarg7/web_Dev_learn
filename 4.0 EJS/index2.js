import express from "express";

const app=express();
const port =3000;
var fruits=["apple", "banana","mango"];

app.get("/", (req,res) => {
    res.render("index2.ejs",{
        bowl:fruits,
    });
});

app.listen(port, () => {
    console.log(`port running on ${port}`);
});