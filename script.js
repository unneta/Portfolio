window.onscroll=function()
{myfunction()}
var navbar = document.getElement("navbar");

var sticky=navbar.offsetTop;

function myfunction(){
    if(window.pageYoffset>=sticky)
    {
        navbar.classList.add("sticky");

    }

    else{
        navbar.classList.remove("sticky");
    }
}