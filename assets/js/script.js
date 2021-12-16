console.log("script");

var menu = document.getElementsByTagName('img')[1];
console.log(menu);
var nav = document.getElementsByTagName('nav')[0];
console.log(nav);

function ouvrirMenu() {
    console.log("ouvrir");

    if( nav.style.visibility == 'visible'){
        nav.style.visibility = 'hidden';
        menu.src = 'assets/img/burger.png';
    }else{
        nav.style.visibility = 'visible';
        menu.src = 'assets/img/close.png';
    }
}

