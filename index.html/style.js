window.addEventListener("DOMContentLoaded",function (){let width = window.innerWidth;
    window.onresize = () => { window.location.reload()}
    if (width<768) {
    var a='<a href="#menu" class="box-shadow-menu" id="BAR"></a>';
    document.querySelector(".topnav").innerHTML=a;
    document.getElementById("BAR").addEventListener("click",dropdown,false);
}
else{
    var a='<a href="#about">About</a><a href="#contact">Contact</a><a href="#news">News</a><a class="active" href="#home">Home</a>';
    document.querySelector(".topnav").innerHTML=a;
}  
function dropdown(){
        a='<br><div><a class="active" href="#home">Home</a></div><div><a href="#news">News</a></div><div><a href="#contact">Contact</a></div><div><a href="#about">About</a></div>';
        document.querySelector("#drop").innerHTML=a;
    }
});  