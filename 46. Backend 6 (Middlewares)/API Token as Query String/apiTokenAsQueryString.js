/**
 * API Token as Query String
------------------------------
Let's create a middle-ware for an api that checks if the access token was passed in the query 
string or not.


** till now we have studied about free api. But some APIs need access token(similar like password)


our api send some data in response. the api will send data when 

/api?token=give acess

if access is there then data can be send otherwise it will show cann't access or other error.

Just like without access(log in) we can not use twitter, facebook.



//middleware layer to see if token is correct or not.
app.use("/api",(req, res, next)=>{
    let{token} = req.query;
    if(token ==="giveaccess")
    {
        next();
    }else{
        res.send("ACCESS DENIED!");
    }
});

app.get("/api", (req, res)=>{
    res.send("data");
});


localhost:8080/api?token=giveaccess




*/