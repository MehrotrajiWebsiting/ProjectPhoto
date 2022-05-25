window.addEventListener("DOMContentLoaded",function (){let width = window.innerWidth;
    window.onresize = () => { window.location.reload()}
    if (width<768) {
    var a='<a href="#menu" class="box-shadow-menu" id="BAR"></a>';
    document.querySelector(".topnav").innerHTML=a;
    document.getElementById("BAR").addEventListener("click",dropdown,false);
}
else{
    var a='<a href="#about">About us</a><a href="#contact">Contact us</a><a href="#news">Our works</a><a class="active" href="#home">Home</a>';
    document.querySelector(".topnav").innerHTML=a;
}  
function dropdown(){
        a='<br><div id="dhome"><a class="active" href="#home">Home</a></div><div id="dnews"><a href="#news">Our works</a></div><div id="dcontact"><a href="#contact">Contact us</a></div><div id="dabout"><a href="#about">About us</a></div>';
        document.querySelector("#drop").innerHTML=a;
        document.getElementById("dhome").addEventListener("click",dropdownclose,false);
        document.getElementById("dnews").addEventListener("click",dropdownclose,false);
        document.getElementById("dcontact").addEventListener("click",dropdownclose,false);
        document.getElementById("dabout").addEventListener("click",dropdownclose,false);
    }
function dropdownclose(){
    document.querySelector("#drop").innerHTML='';
}
window.addEventListener('click', function(e){   
    if (document.querySelector(".topnav").contains(e.target)){
      // Clicked in box
    } else{
      // Clicked outside the box
      dropdownclose();
    }
  });    
});  