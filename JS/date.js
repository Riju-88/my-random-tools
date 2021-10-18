
let timer= setInterval(() => {
let date= new Date();
let month= date.getMonth();
let year= date.getFullYear();
let min= date.getMinutes();
let day= date.getDay();
let hrs= date.getHours();
let sec= date.getSeconds();
let dateNum= date.getDate();

let dayArr= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let monthArr=["January","February","March","April","May","June","July","August","September","October","November","December"];

    let hour= document.getElementById("hr");
    let mins= document.getElementById("min");
    let seconds= document.getElementById("sec");

    let dd=document.getElementById("dd");
    let mm= document.getElementById("mm");
    let yyyy= document.getElementById("yyyy");

    let dispDay=document.getElementById("week");
    let dispMonth=document.getElementById("month");
    let dispDate= document.getElementById("date");

    hour.innerHTML=hrs;
    mins.innerHTML=min;
    seconds.innerHTML=sec;

    dd.innerHTML=dateNum;
    mm.innerHTML=month+1;
    yyyy.innerHTML=year;

    dispDay.innerHTML=dayArr[day];
    dispMonth.innerHTML=monthArr[month];
    dispDate.innerHTML=dateNum;
}, 200);
