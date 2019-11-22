const express = require("express")
const app = express()
const port = process.env.PORT||3000
const url= "https://docs.google.com/forms/d/e/1FAIpQLSdOQ_Y1ELnqhDJpW-AW1plRUEsbuErPhL6znr4WU_aWvRZ1nA/viewform"
app.get('/' , (req,res)=> res.redirect(url ))
app.listen(port,console.log("welcome to nsutmun"));
