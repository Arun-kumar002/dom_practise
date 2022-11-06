let form=document.querySelector("form");
let ul=document.querySelector("ul");
console.log(ul);

form.addEventListener("submit", e=>{
    e.preventDefault();
    // console.log(e.target[0].value);
    let li=document.createElement("li");
    let input=document.querySelector("#username");
    let value=input.value;
    li.innerHTML=e.target[0].value;
    console.log(li.innerHTML);
    ul.appendChild(li);
    let del=document.createElement("button");
    del.classList.add("delete-danger")
    del.textContent="Delete";
    let edit=document.createElement("button");
    edit.textContent="Edit";
    edit.className="purple";
    ul.appendChild(del);
    ul.appendChild(edit);
    del.onclick=function(){
        li.remove();
        del.remove();
        edit.remove(); 
    }
    edit.onclick=function(){
         let update=document.createElement("button");
         update.textContent="update";
         input.value=value;
         
    
         li.remove();
         del.remove();
         edit.remove();
         e.target[1].setAttribute("value", "update")

    }
    if( e.target[1].value ="update"){
    e.target[1].setAttribute("value", "Add");
    e.target[1].setAttribute("id", "purple");
    
    

   }
})