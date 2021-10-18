         
function zodiac(){
          
    var d = document.querySelector("#date").selectedOptions[0].value;

/*var mon= parseInt(document.getElementById("month").value);*/
/*** If the Vars are defined outside of function then for some reason its not getting their value ***/

var m = document.querySelector('#month').selectedOptions[0].value; /*** Getting the Value and Text/Label of the Selected Options:- 
The selectedOptions property of the select element gives the list of options that are currently selected. Each element in this list is a DOM <option> element — so you can use the value and text property to get the value and inside text of the option.

// For a normal select (and not multi-select) the list would contain only a single element:-

//The following will get the text inside of option element:-

var text = document.querySelector("#id_name").selectedOptions[0].text;

//The following will get the value of option element:-

var value = document.querySelector("#id_name").selectedOptions[0].value;

***/
var out= document.getElementById("output");

       // alert(m);
       //January
        if(m==1){
        if(d>=1 && d<=19){
        out.innerHTML="Capricorn";
        }
        
        else if(d>=20 && d<=31){
        out.innerHTML="Aquarius";
        }
        
        else if(d<=0 || d>31){
        out.innerHTML="Check the date again";
        }}
            
     //February
        if(m==2){
        if(d>=19 && d<=29){
        out.innerHTML="Pisces";
        }
        
        else if(d>=1 && d<=18){
        out.innerHTML="Aquarius";
        }
        
        else if(d<=0 || d>29){
        out.innerHTML="Check the date again";
        }
        }
        
     // March
        if(m==3){
        if(d>=1 && d<=20){
        out.innerHTML="Pisces";
        }
        
        else if(d>=21 && d<=31){
        out.innerHTML="Aries";
        }
        
        else if(d<=0 || d>31){
        out.innerHTML="Check the date again";
        }
        }
            
     //April
        if(m==4){
        if(d>=1 && d<=19){
            out.innerHTML="Aries";
        }
        
        else if(d>=20 && d<=30){
            out.innerHTML="Taurus";
        }
        
        else if(d<=0 || d>30){
        out.innerHTML="Check the date again";
        }
        }
            
     //May
        if(m==5){
        if(d>=1 && d<=20){
            out.innerHTML="Taurus";
        }
        
        else if(d>=21 && d<=31){
            out.innerHTML="Gemini";
        }
        
        else if(d<=0 || d>31){
        out.innerHTML="Check the date again";
        }
        }
            
     //June
        if(m==6){
        if(d>=1 && d<=21){
            out.innerHTML="Gemini";
        }
        
        else if(d>=22 && d<=30){
            out.innerHTML="Cancer";
        }
        
        else if(d<=0 || d>30){
        out.innerHTML="Check the date again";
        }
        }
            
     //July
        if(m==7){
        if(d>=1 && d<=22){
            out.innerHTML="Cancer";
        }
        
        else if(d>=23 && d<=31){
            out.innerHTML="Leo";
        }
        
        else if(d<=0 || d>31){
        out.innerHTML="Check the date again";
        }
        }
            
     //August
        if(m==8){
        if(d>=1 && d<=22){
            out.innerHTML="Leo";
        }
        
        else if(d>=23 && d<=31){
            out.innerHTML="Virgo";
        }
        
        else if(d<=0 || d>31){
        out.innerHTML="Check the date again";
        }
        }
            
     //September
        if(m==9){
        if(d>=1 && d<=22){
            out.innerHTML="Virgo";
        }
        
        else if(d>=23 && d<=30){
            out.innerHTML="Libra";
        }
        
        else if(d<=0 || d>30){
        out.innerHTML="Check the date again";
        }
        }
            
     //October
        if(m==10){
        if(d>=1 && d<=23){
            out.innerHTML="Libra";
        }
        
        else if(d>=24 && d<=31){
            out.innerHTML="Scorpio";
        }
        
        else if(d<=0 || d>31){
        out.innerHTML="Check the date again";
        }
        }
            
     //November
        if(m==11){
        if(d>=1 && d<=21){
            out.innerHTML="Scorpio";
        }
        
        else if(d>=22 && d<=30){
            out.innerHTML="Sagittarius";
        }
        
        else if(d<=0 || d>30){
        out.innerHTML="Check the date again";
        }
        }
            
     //December
        if(m==12){
        if(d>=1 && d<=21){
out.innerHTML="Sagittarius";
        }
        
        else if(d>=22 && d<=31){
  out.innerHTML="Capricorn";
        }
        
        else if(d<=0 || d>31){
        out.innerHTML="Check the date again";
        }
        }
        
        if(m<=0 || m>12){
        
    out.innerHTML="Select the Month";
        }
        
}
/*function check(){
    var d= parseInt(document.getElementById("date").value);

var m= parseInt(document.getElementById("month").value);
out.innerHTML=d,m);
}*/
    