/*
API
----
Application Programming Interface


                        request
    client/browser ----------------->  amazon server/ any server
             ↑                                  |
             |                                  ↓
             <-----------------------------------
                    response (html, css, js)
                    




                asking food (req)             fetching food 
 [        ]  ------------------->  [   ] --------------------> [       ]
 [customer]                        [API]                       [KITCHEN] 
 [        ]  <-------------------  [   ] <-------------------- [       ]
              delivering food (res)  ↓        fetched food
                                   waiter

    

 [software] <---> [API] <---> [software]

 Generally, which API use http protocol (internet based) we call them WebAPIs. 

 If we use predefined existing api, then it generally returns data.
        
             req
 client <------------> [api](links/url/endpionts)
           res (data)


*/