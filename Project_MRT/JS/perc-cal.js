
    let cal01 = document.getElementById("cal1");
    cal1.addEventListener("click", () => {
      let num = parseInt(document.getElementById("num1").value);
      let perc = parseInt(document.getElementById("num2").value);
      let res01 = document.getElementById("res1");
      let conv = perc / 100;
      let conv2 = num * conv;
      res01.innerHTML = `    ${conv2.toFixed(2)}`;
      /*** .toFixed limits the floating numbers ***/
      console.log(num * conv);
    });
    let clear = document.getElementById("clr");
    clear.addEventListener("click", () => {
      document.getElementById("num1").value = "";
      document.getElementById("num2").value = "";
      document.getElementById("res1")
        .innerHTML = "";
    });

    let cal00 = document.getElementById("cal0");
    cal00.addEventListener("click", () => {
      let numX = parseInt(document.getElementById("num3").value);
      let numY = parseInt(document.getElementById("num4").value);
      let res02 = document.getElementById("res2");
      let proc = numX / numY;
      let per = proc * 100;
      res02.innerHTML = `${numX} is ${per.toFixed(2)}% of ${numY}`;
    });

    let clear1 = document.getElementById("clr1");
    clear1.addEventListener("click", () => {
      document.getElementById("num3").value = "";
      document.getElementById("num4").value = "";
      document.getElementById("res2")
        .innerHTML = "";
    });

    window.onload = function () {
      let b = document.getElementById("body");
      let light = document.getElementById("light");
      let dark = document.getElementById("dark");


        // CODE FOR NAV.JS
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
            }})
            // END CODE FOR NAV.JS




      light.addEventListener("click", () => {
        b.style.backgroundColor = "#b9babb";
        b.style.color = "#021e5a";
        localStorage.setItem("value", "l");
      });
      dark.addEventListener("click", () => {
        b.style.backgroundColor = "rgb(20%,20%,25%)";
        b.style.color = "#0de61a";
        localStorage.setItem("value", "d");
      });
      let theme = localStorage.getItem("value");
      if (theme == "l") {
        b.style.backgroundColor = "#b9babb";
        b.style.color = "#021e5a";
      }
      if (theme == "d") {
        b.style.backgroundColor = "rgb(20%,20%,25%)";
        b.style.color = "#0de61a";
      }
    }
