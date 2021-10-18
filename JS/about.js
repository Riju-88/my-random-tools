let fb= document.getElementById("fb");
 fb.addEventListener("click",()=>{
    fb.href="https://www.facebook.com/uxplayer01";
    setTimeout(() => {
        fb.href="";
    }, 100);
})