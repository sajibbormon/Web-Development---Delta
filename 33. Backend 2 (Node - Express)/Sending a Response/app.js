/**
 * Sending a Response
-------------------------

            Sending a Response
              /            \
             /              \
            /                \
       request             response 
     (incoming)            (response that carried out in callback) 

every https request is text based request.

express convert this text into a object which we call parsing.

Why we need to parse?
    We need to parse bcz the JS understand the object.

 

app.use((req, res) =>{
    console.log("request received");
    res.send("This is a basic response");
});

To send response we use .send() method.

.send() method send http response, we can send string, array, boolean, object

express responds with the JSON representation(when array or object)

when the parameter is a String the method sets the Content-Type to "text/html".


//sending an object in response
app.use((req, res) => {
    console.log("request received");
    res.send({
        name: "apple",
        color: "red",
    });
});

Express will parse this into a json


*/