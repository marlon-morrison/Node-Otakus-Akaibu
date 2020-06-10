const express = require('express'); 
const app = express(); 

const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./app/routes/router");

const port = 5000;
app.listen(5000, () => { 
    console.log(`Server is running at http://localhost:${port}`); 
});

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// All Routes
app.get("/", (req,res) => {
    res.json({
        "All cars":"http://localhost:5000/api/cars",
        "Find by id":"http://localhost:5000/api/cars/1",
        "Find by make":"http://localhost:5000/api/cars/make/ford"
    });
});

app.post("/post", (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.use("/api",router)