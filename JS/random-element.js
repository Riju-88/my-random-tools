
        let rgbcounter = document.getElementById("rgbcount");
        let ldcounter = document.getElementById("ldcount");
        let rgbclick = 0;
        let ldclick = 0;
        let totalR = 0;
        let totalG = 0;
        let totalB = 0;
        let totalL = 0;
        let totalD = 0;

        function rgb() {
            let rgbmin = 1;
            let rgbmax = 3;
            let disp = document.getElementById("output");
            let counterrgb = document.getElementById("totalrgb");
            let result = Math.floor(Math.random() * (rgbmax - rgbmin + 1)) + rgbmin;
            if (result == 1) {
                totalR += 1;
                document.getElementById("fire").innerHTML = totalR;
                disp.innerHTML = "Fire Element";
                disp.style.color = "orange";
                disp.style.fontWeight = "bold";
                disp.style.textShadow = "-1px -1px 0 #001022";
                disp.style.fontSize = "2.8rem";
            }

            if (result == 2) {
                totalB += 1;
                document.getElementById("water").innerHTML = totalB;
                disp.innerHTML = "Water Element";
                disp.style.color = "dodgerblue";
                disp.style.fontWeight = "bold";
                disp.style.textShadow = "-1px -1px 0 #001022";
                disp.style.fontSize = "2.8rem";
            }

            if (result == 3) {
                totalG += 1;
                document.getElementById("wood").innerHTML = totalG;
                disp.innerHTML = "Wood Element";
                disp.style.color = "#14de28";
                disp.style.fontWeight = "bold";
                disp.style.textShadow = "-1px -1px 0 #001022";
                disp.style.fontSize = "2.8rem";
            }
            /*** if(result>=1){
                
            
                counterrgb.innerHTML="Total RGB summoned:  ";
            } ***/


        }


        function rgbSummon() {
            rgbclick += 1;
            rgbcounter.innerHTML = rgbclick;
            rgbcounter.style.fontSize = "2.4rem";
            rgbcounter.style.fontWeight = "bold";
        }



        function ld() {
            let ldmin = 1;
            let ldmax = 2;
            let disp = document.getElementById("output");
            counter = document.getElementById("totalld");
            let res = Math.floor(Math.random() * (ldmax - ldmin + 1)) + ldmin;
            if (res == 1) {
                totalL += 1;
                document.getElementById("light").innerHTML = totalL;
                disp.innerHTML = "Light Element";
                disp.style.color = "#ffe047";
                disp.style.fontWeight = "bold";
                disp.style.textShadow = "-1px -1px 0 #001022";
                disp.style.fontSize = "2.8rem";
            }
            if (res == 2) {
                totalD += 1;
                document.getElementById("dark").innerHTML = totalD;
                disp.innerHTML = "Dark Element";
                disp.style.color = "#ab50B8";
                disp.style.fontWeight = "bold";
                disp.style.textShadow = "-1px -1px 0 #001022";
                disp.style.fontSize = "2.8rem";
            }
            /*** if(res>0)
        {
            counter.innerHTML="Total L/D summoned:  ";
        } ***/
        }
        function ldSummon() {
            ldclick += 1;
            ldcounter.innerHTML = ldclick;
            ldcounter.style.fontSize = "2.4rem";
            ldcounter.style.fontWeight = "bold";
        }

        /***
         ***/
    