
var btn = document.getElementById("1");
var btn2 = document.getElementById("2");
//var btn3 = document.getElementById("3");
console.log(btn);
console.log(btn2);
//console.log(btn3);
/*
btn.addEventListener('click', function btn1Clicked(event) {

    btn.style.animation = null;
  
    
        console.log("hi 1");
        btn.style.animationDuration ="2s";
        btn.style.animation = 'main_bar_collapse'; 
        btn.style.animationDuration = "2s";
        btn.style.animationFillMode="forwards";

        btn2.style.animationDuration = "2s";
        btn2.style.animation = 'main_bar_collapse'; //this is a nasty ah language bruh :skull:
        btn2.style.animationFillMode = "forwards";
        btn2.style.animationDuration = "2s";
        btn2.style.animationDelay = "0.2s";
        btn2.style.top="20%";

        btn3.style.animationDuration = "2s";
        btn3.style.animation = 'main_bar_collapse'; //this too. :skull:
        btn3.style.animationFillMode = "forwards";
        btn3.style.animationDuration = "2s";
        btn3.style.animationDelay = "0.3s";
        btn3.style.top = "20%";
   


}, false);
*/

function btn2Clicked() {
    btn2.addEventListener('click', btn2Clicked, false);
    console.log("hi");
   /* btn2.style.animation = null;



    btn2.style.animationDuration = "2s";
    btn2.style.animation = 'main_bar_collapse';
    btn2.style.animationDuration = "2s";
    btn2.style.animationFillMode = "forwards";

    btn.style.animationDuration = "2s";
    btn.style.animation = 'main_bar_collapse'; //this is a nasty ah language bruh :skull:
    btn.style.animationFillMode = "forwards";
    btn.style.animationDuration = "2s";
    btn.style.animationDelay = "0.2s";
    btn.style.top = "20%";

    btn3.style.animationDuration = "2s";
    btn3.style.animation = 'main_bar_collapse'; //this too. :skull:
    btn3.style.animationFillMode = "forwards";
    btn3.style.animationDuration = "2s";
    btn3.style.animationDelay = "0.3s";
    btn3.style.top = "20%";
*/


}
btn.addEventListener('click', btn2Clicked, false);
btn2.addEventListener('click', btn2Clicked, false);
//btn2.addEventListener("click",btn2Clicked,false);
//btn2.addEventListener('click', function btn2Clicked(event) {
    //console.log ("hi");
   // btn2.style.animation = null;



  //  btn2.style.animationDuration = "2s";
  //  btn2.style.animation = 'main_bar_collapse';
   // btn2.style.animationDuration = "2s";
    //btn2.style.animationFillMode = "forwards";

    //btn.style.animationDuration = "2s";
    //btn.style.animation = 'main_bar_collapse'; //this is a nasty ah language bruh :skull:
    //btn.style.animationFillMode = "forwards";
    //btn.style.animationDuration = "2s";
    //btn.style.animationDelay = "0.2s";
    //btn.style.top = "20%";

    //btn3.style.animationDuration = "2s";
    //btn3.style.animation = 'main_bar_collapse'; //this too. :skull:
    //btn3.style.animationFillMode = "forwards";
    //btn3.style.animationDuration = "2s";
    //btn3.style.animationDelay = "0.3s";
    //btn3.style.top = "20%";



//},false);
