const express = require('express');
const path = require('path');
const cors = require('cors');

const port = 8080;

const app = express();

app.use(express.static(path.join(__dirname, '/')));


//routing
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/home.html'))
})

app.get('/datetime', (req, res) => {
    const date = new Date();
    console.log(date)
    res.end(`the current date and time is: ${date}`)
})

app.get('/bigger', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    if(isNaN(a) || isNaN(b)) {
        res.writeHead((400))
        res.end('You must enter numbers')
        return;
    }
    res.writeHead(200);
    if(a > b){
        res.end(`${a} > ${b}`);
    }
    else if (b > a) {
        res.end(`${b} > ${a}`);
    } else {
        res.end(`${a} == ${b}`);
    }

})

app.get('/targil', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const sum = Number(req.query.sum);
    if(isNaN(a) || isNaN(b) || isNaN(sum)) {
        res.writeHead((400))
        res.end('You must enter numbers')
        return;
    }
    // res.writeHead(200);
    const sumCorrect = a + b;
    if(sumCorrect === sum){
        res.sendFile(path.join(__dirname + '/correct.html'))
    }
    else {
        res.sendFile(path.join(__dirname + '/wrong.html'))
    }

})

//port listening
app.listen(port, () => {
    console.log(`listening to port ${port}`);
})
