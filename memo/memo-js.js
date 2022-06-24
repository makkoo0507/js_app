const button = document.getElementById("newtodo-btn");
const appname = document.getElementsByClassName("app-name")[0];
const todocontainer=document.getElementById("todo-container");

button.addEventListener("click",()=>{
    const input = document.getElementById("new-todo");
    
    const newlist = document.createElement("li");
    newlist.setAttribute("class","todo-item");
    newlist.innerText=input.value;
    const done =document.createElement("button")
    done.innerText="終了"
    done.setAttribute("class","add-btn")

    todocontainer.appendChild(newlist);
    newlist.appendChild(done)
    
    done.addEventListener("click",()=>{
        newlist.setAttribute("class","endline")
    });
});


