let ubicacionPrincipal = window.pageYOffset;
let factor = 0.5
window.onscroll = function () {
    let Desplazamiento_Actual = window.pageYOffset;
    if (window.pageYOffset >= 0 && window.pageYOffset <screen.height*factor) {
        document.getElementById('navbar').style.backgroundColor = 'transparent'
    }

    else if (ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('navbar').style.top = '0'
    }
    else if (window.pageYOffset >= screen.height*factor) {
        document.getElementById('navbar').style.backgroundColor = '#081E36'
        document.getElementById('navbar').style.top = '-11vh'
        document.getElementById('navbar').style.color = 'white'
    }
    // if(ubicacionPrincipal >= Desplazamiento_Actual) {
    //     document.getElementById('navbar').style.top = '0';

    // }

    // else if (window.pageYOffset > screen.height){
    //     document.getElementById('navbar').style.backgroundColor = 'blue'
    // }
    // else if (window.pageYOffset >=  0 && window.pageYOffset <= screen.height){
    //     document.getElementById('navbar').style.backgroundColor = 'transparent'
    // }
    // else {
    //     document.getElementById('navbar').style.top = '-11vh';
    // }
    ubicacionPrincipal = Desplazamiento_Actual;
}