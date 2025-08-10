const express = require("express");

const app = express();

// console.dir(app);

port = 3000;

app.listen(port, () =>{
    console.log(`app is listening on port ${port}`);
});