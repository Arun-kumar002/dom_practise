// let fo=document.querySelector("form");
// let user=document.querySelector("input[type='text']");
// let word=document.querySelector("input[type='password']");
// fo.addEventListener("submit",e=>{
//     e.preventDefault();
//     let name=e.target[0].value;
//     let pass=e.target[1].value;
//     console.log({name,pass});
// })

let form=document.querySelector("form");
let ul=document.querySelector("ul");

form.addEventListener("submit",e=>{
    e.preventDefault();
    let li=e.target[0].value;
    if(li.length<=0){
      alert("please")
    }

    else {
    let cli=document.createElement("li");
   
  

    //button delete
    let span=document.createElement("span");
    span.innerHTML=li
    let btn=document.createElement("button");
    btn.innerHTML="delete";
    ul.appendChild(cli);
    cli.appendChild(span);
    let span2=document.createElement("span");
    span2.innerHTML="<button class='delete'>delete</button>";
    cli.appendChild(span2)}
      
    e.target[0].value="";


});
ul.addEventListener("click",e=>{
    let del=document.querySelector(".delete");
    if (e.target.nodeName==="BUTTON")
    del.parentNode.parentNode.remove()

    //we  remove delete function
});



