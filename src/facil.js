const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let pelotaImage = new Image();
pelotaImage.src = "./src/images/pelotaPadel.png";

let baseImage = new Image();
baseImage.src = "./src/images/base.png";

let base = new Base(200, canvas.height - 30, 200, 10, baseImage, 30, ctx);
let pelota = new Pelota(-200, -200, 30, 30, pelotaImage, 2, ctx);




const cargaInicial = () => {
  base.dibujar();
  pelota.dibujar();
  

  const cambiarDireccionSiColision = () => {
                                                        //detectamos la colision de la pelota Principal
    if (base.detectarColision(pelota,) === "colision-superior") {
      pelota.direccionY = "arriba";
    }
    if (base.detectarColision(pelota) === "colision-izquierda") {
      pelota.direccionX = "izquierda";
    }
    if (base.detectarColision(pelota) === "colision-derecha") {
      pelota.direccionX = "derecha";
    }
  };

  const moverPelota = () => {
    pelota.borrar();
    pelota.moverPelota();
    console.log(base.comprobarPosicionEnCanvas());
    //console.log(pelota.comprobarPosicionEnCanvas());
    //console.log(base.detectarColision(pelota));
    cambiarDireccionSiColision();
    pelota.dibujar();
  };
  
  


  const incrementoVelocidadPelota =() =>{

    if (pelota.velocidad === 2){
      return pelota.velocidad = 4;
    }
    if (pelota.velocidad === 4){
      return pelota.velocidad = 3;
    }if (pelota.velocidad === 3){
      return pelota.velocidad = 5;
    }
    
    console.log(pelota.velocidad);
}


    setInterval(incrementoVelocidadPelota, 5000);
    setInterval(moverPelota, 01);
};

const logKey = (e) => {
  e.preventDefault();
  base.borrar();
  base.moverBase(e.key);
  base.dibujar();
};

document.addEventListener("keydown", logKey);

window.addEventListener("load", cargaInicial);
