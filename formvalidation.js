let user=document.querySelector("#name");
let word=document.querySelector("#password");
let email=document.querySelector("#email");
let btn=document.querySelector("button");
let span=document.querySelectorAll(".errorBlock");
let form=document.querySelector("form");
console.log(span);
// console.log(btn);
// console.log(email);
// console.log(word);
// console.log(user);
// user.addEventListener("change",e=>{  //nstead of change we use key up
//     if(e.target.value.length<6){
//         span[0].innerHTML="please enter atleast 6 chr";
//         // span[0].style.color="red";//it will come the msg will disapper in 2 sec;
//         span[0].classList.add("error-danger");
//         span[0].previousElementSibling.classList.add("input-error")
//     }
//      else{
//         span[0].innerHTML="";
//         // span[0].style.color="initial";
//         span[0].classList.remove("error-danger");
//         span[0].previousElementSibling.classList.remove("input-error")
//     }
// })

// another way
//dynamic way
let errormessage=function(element,message){
    element.nextElementSibling.innerHTML=message;
    element.nextElementSibling.classList.add("error-danger");
}
form.addEventListener("submit",e=>{
    e.preventDefault();
    if(user.value==""){
        errormessage(user,"username is req")
        // span[0].innerHTML="username is required";
        // span[0].classList.add("error-danger");
    }
    else if(word.value==""){
        // span[1].innerHTML="password is required";
        // span[1].classList.add("error-danger");
        errormessage(word,"password is req")
    }
    else if (email.value==""){
        // span[2].innerHTML="email is required";
        // span[2].classList.add("error-danger") 
        errormessage(email,"email is req")
    }
    else{
        span.forEach(x=>{
            x.style.display="none";

        });
       
        
    }  
});

// form.addEventListener("submit",e=>{
//     let user1=user.value;
//     let word1=word.value;
//     let email1=email.value;
//     // let btn1=btn.value;

//     if(user1.length<=0 )
//     {
//         alert("please enter proper name");
//     }
//     else if(word1.length<=0 )    //old way
//     {
//         alert("please enter proper pass");
//     }
//     else if(word1.length<9 )
//     {
//         alert("please enter proper pass");
//     }
//     else if(email1.length<=0 )
//     {
//         alert("please enter proper email");
//     }
//     else if(user1.length>=20){
//         alert("name not exceed 20")
       
//     }
//     else if(word1.length<0 && word1.length>8){
//         alert("pwd more than 1 and greater of 8")
       
//     }
//     else if(email1.length<0 ){
//         alert("pwd more than 1 and greater of 8")
       
//     }


// });

