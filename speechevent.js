  window.SpeechRecognition=window.SpeechRecognition || webkitSpeechRecognition;
  let recog=new SpeechRecognition();

  //start
  recog.start();

  //add event
//   recog.addEventListener("result",e=>{
//     let transcript=e.results[0][0].transcript;
//     console.log(transcript);
//   });//noraml
let art=document.querySelector("#template");
let p=document.createElement("p");
art.appendChild(p);
//recognising continuous
recog.addEventListener("result",e=>{
        let transcript=e.results[0][0].transcript;
        p.textContent=transcript;
        document.body.style.background=transcript;//the speech color will change
        if (e.results[0].isFinal===true){
            p=document.createElement("p");
            p.textContent=transcript;
            art.appendChild(p);

        }
      
    });
    recog.addEventListener("end", recog.start)
    