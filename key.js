let t1=document.querySelector("#t1");
let t2=document.querySelector("#t2");
console.log(t1);
console.log(t2);

// t1.addEventListener("keypress",e=>{
//       let value=e.target.value;
//       if(value.length>=0 && value.length<10)
//       {
//         t2.style.background="red";
//         t2.innerHTML="very bad"
//       }
//       else if(value.length>=10 && value.length<20)
//       {
//         t2.style.background="orange";
//         t2.innerHTML="ok..."
//       }
//       else if(value.length>=20 && value.length<30)
//       {
//         t2.style.background="green";
//         t2.innerHTML="good"
//       }
//       else 
//       {
//         t2.style.background="#111";
//         t2.innerHTML="over man";
//         t2.style.color="#fff"
//       }
// }
// );
t1.addEventListener('keypress',e=>{
  t2.innerHTML=e.target.value;
})