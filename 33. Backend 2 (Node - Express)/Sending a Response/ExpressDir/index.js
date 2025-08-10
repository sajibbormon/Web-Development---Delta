const express = require("express");

const app = express();

port = 8080;

app.listen(port, ()=>{
    console.log(`Listening from port ${port}`);
});

//sending a string/text in response. 
// app.use((req, res) => {
//     console.log("request received");
//     res.send("This is a basic response");
// });


// //sending an object in response
// app.use((req, res) => {
//     console.log("request received");
//     res.send({
//         name: "apple",
//         color: "red",
//     });
// });


//sending a html in response
app.use((req, res) => {
    console.log("request received");
    let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>";
    res.send(code);
});