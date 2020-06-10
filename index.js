const express = require('express'); 
const app = express(); 

const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./app/routes/router");

const Port = process.env.PORT || 5000;
app.listen(Port, () => { 
    console.log(`Server is running at http://localhost:${Port}`); 
});

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// All Routes
app.get("/", (req,res) => {
    res.json({
        "All Acharacters":"http://localhost:5000/api/Acharacters",
        "Find by id":"http://localhost:5000/api/Acharacters/1",
    });
});

app.post("/post", (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.use("/api",router)