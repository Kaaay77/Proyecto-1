const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let pelotaImage = new Image();
pelotaImage.src = "src/images/pelotaPadel.png";

let baseImage = new Image();
baseImage.src = "src/images/base.png";

let base = new Base(200, 650, 150, 10, baseImage, 50, ctx);
let pelota = new Pelota(300, 200, 30, 30, pelotaImage, 10, ctx);


const cargaInicial = () => {
  base.dibujar();
  pelota.dibujar();

  const cambiarDireccionSiColision = () => {
    if (base.detectarColision(pelota) === "colision-superior") {
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
  
  const incrementoVelocidad =() =>{
    if (pelota.velocidad < 70){
        pelota.velocidad += 1;

    }
    console.log(pelota.velocidad);
}
  setInterval(incrementoVelocidad, 5000);
  setInterval(moverPelota, 20);
};

const logKey = (e) => {
  e.preventDefault();
  base.borrar();
  base.moverBase(e.key);
  base.dibujar();
};

document.addEventListener("keydown", logKey);

window.addEventListener("load", cargaInicial);
