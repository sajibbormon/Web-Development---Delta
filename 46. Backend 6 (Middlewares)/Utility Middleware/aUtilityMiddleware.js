/**
 * Creating a Utility Middleware
----------------------------------
Logger: Loggers are function which helps us with logs(useful info print on console or terminal)

Suppose: username, id, time, date, path, responseTime hostname, method etc.

more: expressjs.com -------> API reference --------> Request section.

app.use((req, res, next)=>{
    req.responseTime = new Date(Date.now()).toString();

    console.log(req.method, req.path, req.responseTime, req.hostname);
    next();
});



Requests --------> method ( get, post, put, delete)


*** we have to write middleware before any routes.
*** We write middleware at starting.


loger -> morgan is a third-party middleware which can be used for logger.



*/