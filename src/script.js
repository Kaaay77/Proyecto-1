const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let pelotaImage = new Image();
pelotaImage.src = "src/images/pelotaPadel.png";

let baseImage = new Image();
baseImage.src = "src/images/base.png";

let base = new Base(0, 670, 200, 10, baseImage, 50, ctx);
let pelota = new Pelota(0, 0, 30, 30, pelotaImage, 2, ctx);
let pelota2 = new Pelota(0, 0, 30, 30, pelotaImage, 2, ctx);
let pelota3 = new Pelota(0, 0, 30, 30, pelotaImage, 2, ctx);
let pelota4 = new Pelota(0, 0, 30, 30, pelotaImage, 2, ctx);
let pelota5 = new Pelota(0, 0, 30, 30, pelotaImage, 2, ctx);

let pelota2Com = false;
let pelota3Com = false;
let pelota4Com = false;
let pelota5Com = false;


const cargaInicial = () => {
  base.dibujar();
  pelota.dibujar();
  pelota2.dibujar();
  pelota3.dibujar();
  pelota4.dibujar();
  pelota5.dibujar();
  

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
                                                        // Detectamos la colision de la pelota2
    if (base.detectarColision(pelota2,) === "colision-superior") {
      pelota2.direccionY = "arriba";
    }
    if (base.detectarColision(pelota2) === "colision-izquierda") {
      pelota2.direccionX = "izquierda";
    }
    if (base.detectarColision(pelota2) === "colision-derecha") {
      pelota2.direccionX = "derecha";
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
  const moverPelota2 = ()=>{
      pelota2.borrar();
      pelota2.moverPelota();
      cambiarDireccionSiColision();
      pelota2.dibujar();
  }
  const moverPelota3 = ()=>{
    pelota3.borrar();
    pelota3.moverPelota();
    cambiarDireccionSiColision();
    pelota3.dibujar();
  }
  const moverPelota4 = ()=>{
  pelota4.borrar();
  pelota4.moverPelota();
  cambiarDireccionSiColision();
  pelota4.dibujar();
  }
  const moverPelota5 = ()=>{
  pelota5.borrar();
  pelota5.moverPelota();
  cambiarDireccionSiColision();
  pelota5.dibujar();
  }

  const comprobarPelota2 = () =>{
    if ( pelota2Com === false){
      pelota2Com = true;
      setInterval(moverPelota2, 0);
    }
  }
  const comprobarPelota3 = () =>{
    if ( pelota3Com === false){
      pelota3Com = true;
      setInterval(moverPelota3, 0);
    }
  }
  const comprobarPelota4 = () =>{
    if ( pelota4Com === false){
      pelota4Com = true;
      setInterval(moverPelota4, 0);
    }
  }
  const comprobarPelota5 = () =>{
    if ( pelota5Com === false){
      pelota5Com = true;
      setInterval(moverPelota5, 0);
    }
  }


  const incrementoVelocidadPelota =() =>{

    if (pelota.velocidad < 3){
      pelota.velocidad += 2
    }
    
    console.log(pelota.velocidad);
}

const agrandarBase = () => {
  base.ancho = 300;
}
//setInterval(incrementoVelocidadPelota, 5000);
setInterval(moverPelota, 00);

setInterval(comprobarPelota2, 7000);
setInterval(comprobarPelota3, 10000);
setInterval(comprobarPelota4, 15000);
setInterval(comprobarPelota5, 20000);
setInterval(agrandarBase, 10000);
};

const logKey = (e) => {
  e.preventDefault();
  base.borrar();
  base.moverBase(e.key);
  base.dibujar();
};

document.addEventListener("keydown", logKey);

window.addEventListener("load", cargaInicial);
