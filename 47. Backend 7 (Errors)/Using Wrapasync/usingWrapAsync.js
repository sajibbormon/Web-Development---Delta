/** 
 Using Try Catch
-------------------------
So far, we have learnt:
1) normal error
2) async --- any specific error
3) try-catch ----- multiple errors at a time.
now we will use asyncWrap 
4) asynWrap --- wrap the callback



Try catch is repetitive. We are using it again and again. But if want to write more better code
using try catch, we can use wrapAsync


function asyncWrap(fun){
    return function(req, res, next){
        fun(req, res, next).catch((err) => next(err));
    }
}

we will use the asyncWrap function by removing the try catch.

app.get("/chats/:id", asynWrap(async(req, res,  next)=>{
        let {id} = req.params;
        let chat = await Chat.findById(id);
        console.log(chat);
        if(!chat){
            next(new ExpressError(404, "Chat not found!"));
        }
        res.render("edit.ejs", {chat});
}));


*/