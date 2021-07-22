window.addEventListener("scroll", menuTransparente);
const element = document.getElementById('full-menu').style;
const logo = document.getElementById('logo').style;

function menuTransparente(){
    if (window.scrollY > 70){
        element.backgroundColor = 'rgba(255,255,255,0.75)';
        element.height = '70px';
        logo.width = '100px';
    }else{
        element.backgroundColor = 'rgba(255,255,255,1)';
        element.height = 'unset';
        logo.width = '200px';
    }
}

menuTransparente();