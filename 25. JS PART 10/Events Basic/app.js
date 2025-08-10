/*
DOM Events
------------
Events are signals that something has occurred. (user inputs/ actions)
(button click, drag, scroll etc. anything which triggers with mouse or keyboard or fingers in mobile).

based on the actions/inputs we perform actions.
*/

//
/*
Inline Events
--------------

*/

let button = document.querySelector('button');

button.onclick = (()=>{
    let msg = document.createElement('p');
    msg.innerText = "You've clicked the button";
    document.body.append(msg);
})