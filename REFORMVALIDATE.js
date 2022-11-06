let user=document.querySelector("#name");
let word=document.querySelector("#password");
let email=document.querySelector("#email");
let btn=document.querySelector("button");
let span=document.querySelectorAll(".errorBlock");
let form=document.querySelector("form");

let re=/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/;
let errormessage=function(element,message){
    element.nextElementSibling.innerHTML=message;
    element.nextElementSibling.classList.add("error-danger");
}
form.addEventListener("submit",e=>{
    e.preventDefault();
    if(user.value==""){
        errormessage(user,"username is req");
        span[0].addEventListener("mouseout",e=>{
            
            span[0].style.display="none";
        })
    }
   
    else if(word.value==""){

        
        errormessage(word,"password is req");

        span[1].addEventListener("mouseout",e=>{
            span[0].style.display="none";
        })
    }
    else if(!re.test(email.value)){
         errormessage(email,"email is not match")
    }
    else{
        span.forEach(x=>{
            x.style.display="none";
            user.value="";
            word.value="";
            email.value="";
        });
       
        
    }  
});