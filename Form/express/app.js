const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));
app.use(express.urlencoded());

//PUG SPECIFIC STUFFS
app.set('view engine','pug');                       //setting template engine as pug
app.set('views',path.join(__dirname,'views'));      //set the views directory

//ENDPOINTS
app.get('/',(req,res)=>{
    //adding content to our index.pug file using variables
    const con = "This is the best learning ever";
    const param = {'title':'Nodejs','content':con}
    res.status(200).render('index.pug',param);
})

app.post('/',(req,res)=>{
    form = req.body;
    let outputToWrite = `the name of client is ${form.name}, ${form.age} years old, ${form.email} her emailID, her health assessment`
    fs.writeFileSync('output.txt',outputToWrite);
    const params= {'message':'Thank you for taking the Assessment. we will reach out to you soon.'}
    res.status(200).render('index.pug',params);
})

//START THE SERVER
app.listen(port,()=>{
    console.log(`the application successfully started on ${port}`);
})