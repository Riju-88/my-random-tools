  
let v1=document.getElementById("opt1");
let v2=document.getElementById("opt2");
let v3=document.getElementById("opt3");
let v4=document.getElementById("opt4");
let v5=document.getElementById("opt5");
let btn=document.getElementById("but");
let disp=document.getElementById("res");
window.Onload= btn.addEventListener("click",()=>{
  
  let disp=document.getElementById("res");
  disp.innerHTML="Generating Output..."; 
  // This click event will always activate first and display the txt 
});

window.Onload= btn.addEventListener("click",()=>{
  setTimeout(() => {
    let rng=Math.floor(Math.random()*5)+1;

  if(rng==1){
    
    disp.innerHTML=v1.value;
    console.log(v1.value);
  }
  if(rng==2){
    disp.innerHTML=v2.value;
    console.log(v2.value);
  }
  if(rng==3){
    disp.innerHTML=v3.value;
    console.log(v3.value);
  }if(rng==4){
    disp.innerHTML=v4.value;
    console.log(v4.value);
  }if(rng==5){
    disp.innerHTML=v5.value;
    console.log(v5.value);
  }
  }, 2000);
  /*** The whole logic function will activate
  on each click and show output after 2sec of delay ***/
})

