const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

//canvas.style.border = "5px solid black";



let baseImg = new Image();
baseImg.src = "src/images/base.png"
let base = new Base (300, 750, 150, 10, baseImg);


let pelotaImg = new Image();
pelotaImg.src = "src/images/pelotaPadel.png"
let pelota = new Pelota(50,50,35,40, pelotaImg);
  






const cargaInicial  = () =>{
     
   base.dibujar();
   pelota.dibujar();

   const detectarColision = () =>{
      if (pelota.y + pelota.alto == base.y){
         if(base.x < pelota.x && base.x + base.ancho > pelota.x){
            pelota.direccionY = "arriba";
         }
      }

   };

   const moverPelota = () =>{
      pelota.borrar();
      pelota.comprobarRebote();
      detectarColision();
      pelota.dibujar();
   };

   setInterval(moverPelota, 20);
};



const logKey = (e) =>{
   e.preventDefault();
   base.borrar();
   base.moverBase(e.key);
   base.dibujar();
   console.log(e)
};




document.addEventListener("keydown", logKey);

window.addEventListener("load", cargaInicial);
   
