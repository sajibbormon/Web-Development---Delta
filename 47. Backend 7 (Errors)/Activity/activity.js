/**
 * simple activity
---------------------
//admin route

app.get("/admin", (req, res)=>{
    throw new ExpressError(403, "Access to admin is Forbidden");
}); 

if anyone try to access admin route, it will show error with status code 403 and message is
"Access to admin is Forbidden"






*/