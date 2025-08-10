let inp = document.querySelector("input");

let btn = document.querySelector("button");

let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    if(inp.value.trim() == ""){
        inp.value = "";
    }else{
        item.innerText = inp.value;
        item.appendChild(delBtn);
        ul.appendChild(item);
    }

    // console.log(inp.value);
    inp.value = "";
});

// let delBtns = document.querySelectorAll(".delete");

// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         console.log("element deleted");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }
//this will not work for new added tasks.
//bcz a already a event listener is created for that element. as a result newly created items/element will not work.
//if we want that the old event listener work for all elements/items then we use Event Delegation.
/*
//Event Delegation
--------------------
Event delegation is a technique in JavaScript where a parent element handles events for its child elements, 
even if the children are added dynamically after the page loads. This works because events in JavaScript bubble 
up from the target element to its ancestors.

We add event listener to the parent element rather than child element.

If we want to trigger something for child then same trigger should be written for parent element. 
By bubbling concept if child is triggered then automatically the parent will be triggered.

*/

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement; // getting the button's parent which is li.(list)
        listItem.remove();
    }

    // console.log(event.target.nodeName);
    // console.log("button clicked");
});

//event.target = get the specific child/element for the parents.
//event.target.nodeName = Give the specific node name (li or BUTTON)

