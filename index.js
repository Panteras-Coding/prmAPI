const express = require('express');
const bdParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware

app.use(bdParser.json());
app.use(cors());

//Routing & Endspoints (nodes)

app.get('/', (req, res) => {
    res.status(200).json('OK');
});

//Post Routes 

// //Sign-Up Route 
app.post("/sign-up/:name/:lastName/:id/:mail", (req,res) => {
    res.send("Esta funcionando!!!");
});

//Port & listener

let PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}...`)
});