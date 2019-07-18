const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// bodyParser middle wear for json 
app.use(bodyParser.json());

app.listen(3000);
