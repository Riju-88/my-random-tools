
        window.onload=()=>{
        let nav= document.getElementById("nav");
        let menu= document.getElementById("menu");
        menu.addEventListener("click",()=>{
            console.log("clicked");
            if(nav.style.display=="none")
            {
                nav.style.display= "flex";
            }
            else{
                nav.style.display= "none";
            }
        })
    }
    