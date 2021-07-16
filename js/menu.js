let btn = document.getElementById("btn");
let menu = document.getElementById("menu");
let contador = 0;


btn.addEventListener('click', function(){

 if (contador == 0){
     menu.className=("mostrar");
     contador=1;
 } else {
     menu.classList.remove("mostrar");
     contador=0;
 }


})

window.addEventListener("resize", function(){
   if(screen.width > 730){
       menu.classList.remove("mostrar");
       contador = 0;
   }
})