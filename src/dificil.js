const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let pelotaImage = new Image();
pelotaImage.src = "./../src/images/pelotaPadel.png";

let baseImage = new Image();
baseImage.src = "./../src/images/base.png";

let base = new Base(350, canvas.height - 30, 200, 10, baseImage, 30, ctx);
let pelota = new Pelota(0, 0, 20, 20, pelotaImage, 2.5, ctx);
let pelota2 = new Pelota(0, 0, 20, 20, pelotaImage, 2.5, ctx);
let pelota3 = new Pelota(0, 0, 20, 20, pelotaImage, 2.5, ctx);
let pelota4 = new Pelota(0, 0, 20, 20, pelotaImage, 2.5, ctx);
let pelota5 = new Pelota(0, 0, 20, 20, pelotaImage, 2.5, ctx);
let pelota6 = new Pelota(0, 0, 20, 20, pelotaImage, 2.5, ctx);
let pelota7 = new Pelota(0, 0, 20, 20, pelotaImage, 2.5, ctx);
let pelota8 = new Pelota(0, 0, 20, 20, pelotaImage, 2.5, ctx);
let pelota9 = new Pelota(0, 0, 20, 20, pelotaImage, 2.5, ctx);
let pelota10 = new Pelota(0, 0, 20, 20, pelotaImage, 2.5, ctx);


let pelota2Com = false;
let pelota3Com = false;
let pelota4Com = false;
let pelota5Com = false;
let pelota6Com = false;
let pelota7Com = false;
let pelota8Com = false;
let pelota9Com = false;
let pelota10Com = false;


const cargaInicial = () => {
  base.dibujar();
  pelota.dibujar();
  pelota2.dibujar();
  pelota3.dibujar();
  pelota4.dibujar();
  pelota5.dibujar();
  pelota6.dibujar();
  pelota7.dibujar();
  pelota8.dibujar();
  pelota9.dibujar();
  pelota10.dibujar();
  
  

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
                                                        // Detectamos la colision de la pelota3
    if (base.detectarColision(pelota3,) === "colision-superior") {
      pelota3.direccionY = "arriba";
    }
    if (base.detectarColision(pelota3) === "colision-izquierda") {
      pelota3.direccionX = "izquierda";
    }
    if (base.detectarColision(pelota3) === "colision-derecha") {
      pelota3.direccionX = "derecha";
    }
                                                        // Detectamos la colision de la pelota4
    if (base.detectarColision(pelota4,) === "colision-superior") {
      pelota4.direccionY = "arriba";
    }
    if (base.detectarColision(pelota4) === "colision-izquierda") {
      pelota4.direccionX = "izquierda";
    }
    if (base.detectarColision(pelota4) === "colision-derecha") {
      pelota4.direccionX = "derecha";
    }
                                                        // Detectamos la colision de la pelota5
    if (base.detectarColision(pelota5,) === "colision-superior") {
      pelota5.direccionY = "arriba";
    }
    if (base.detectarColision(pelota5) === "colision-izquierda") {
      pelota5.direccionX = "izquierda";
    }
    if (base.detectarColision(pelota5) === "colision-derecha") {
      pelota5.direccionX = "derecha";
    }
                                                        // Detectamos la colision de la pelota6
    if (base.detectarColision(pelota6,) === "colision-superior") {
        pelota6.direccionY = "arriba";
    }
    if (base.detectarColision(pelota6) === "colision-izquierda") {
        pelota6.direccionX = "izquierda";
    }
    if (base.detectarColision(pelota6) === "colision-derecha") {
        pelota6.direccionX = "derecha";
    }
                                                        // Detectamos la colision de la pelota7
    if (base.detectarColision(pelota7,) === "colision-superior") {
        pelota7.direccionY = "arriba";
    }
    if (base.detectarColision(pelota7) === "colision-izquierda") {
        pelota7.direccionX = "izquierda";
    }
    if (base.detectarColision(pelota7) === "colision-derecha") {
        pelota7.direccionX = "derecha";
    }
                                                        // Detectamos la colision de la pelota8
    if (base.detectarColision(pelota8,) === "colision-superior") {
        pelota8.direccionY = "arriba";
    }
    if (base.detectarColision(pelota8) === "colision-izquierda") {
        pelota8.direccionX = "izquierda";
    }
    if (base.detectarColision(pelota8) === "colision-derecha") {
        pelota8.direccionX = "derecha";
    }
                                                        // Detectamos la colision de la pelota9
    if (base.detectarColision(pelota9,) === "colision-superior") {
        pelota9.direccionY = "arriba";
    }
    if (base.detectarColision(pelota9) === "colision-izquierda") {
        pelota9.direccionX = "izquierda";
    }
    if (base.detectarColision(pelota9) === "colision-derecha") {
        pelota9.direccionX = "derecha";
    }
                                                        // Detectamos la colision de la pelota10
    if (base.detectarColision(pelota10,) === "colision-superior") {
        pelota10.direccionY = "arriba";
    }
    if (base.detectarColision(pelota10) === "colision-izquierda") {
        pelota10.direccionX = "izquierda";
    }
    if (base.detectarColision(pelota10) === "colision-derecha") {
        pelota10.direccionX = "derecha";
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
  const moverPelota6 = ()=>{
    pelota6.borrar();
    pelota6.moverPelota();
    cambiarDireccionSiColision();
    pelota6.dibujar();
}
const moverPelota7 = ()=>{
    pelota7.borrar();
    pelota7.moverPelota();
    cambiarDireccionSiColision();
    pelota7.dibujar();
}
const moverPelota8 = ()=>{
    pelota8.borrar();
    pelota8.moverPelota();
    cambiarDireccionSiColision();
    pelota8.dibujar();
}
const moverPelota9 = ()=>{
    pelota9.borrar();
    pelota9.moverPelota();
    cambiarDireccionSiColision();
    pelota9.dibujar();
}
const moverPelota10 = ()=>{
    pelota10.borrar();
    pelota10.moverPelota();
    cambiarDireccionSiColision();
    pelota10.dibujar();
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
  const comprobarPelota6 = () =>{
    if ( pelota6Com === false){
      pelota6Com = true;
      setInterval(moverPelota6, 0);
    }
  }
  const comprobarPelota7 = () =>{
    if ( pelota7Com === false){
      pelota7Com = true;
      setInterval(moverPelota7, 0);
    }
  }
  const comprobarPelota8 = () =>{
    if ( pelota8Com === false){
      pelota8Com = true;
      setInterval(moverPelota8, 0);
    }
  }
  const comprobarPelota9 = () =>{
    if ( pelota9Com === false){
      pelota9Com = true;
      setInterval(moverPelota9, 0);
    }
  }
  const comprobarPelota10 = () =>{
    if ( pelota10Com === false){
      pelota10Com = true;
      setInterval(moverPelota10, 0);
    }
  }

  const incrementoVelocidadPelota =() =>{

    if (pelota.velocidad < 3){
      pelota.velocidad += 2;
      pelota2.velocidad += 2;
      pelota3.velocidad += 2;
      pelota4.velocidad += 2;
      pelota5.velocidad += 2;
    }
    
    console.log(pelota.velocidad);
}

const agrandarBase = () => {
  base.ancho = 450;
}
//setInterval(incrementoVelocidadPelota, 15000);
  setInterval(moverPelota, 00);
  setInterval(comprobarPelota2, 5000);
  setInterval(comprobarPelota3, 7000);
  setInterval(comprobarPelota4, 9000);
  setInterval(comprobarPelota5, 11000);
  setInterval(comprobarPelota6, 12000);
  setInterval(comprobarPelota7, 13000);
  setInterval(comprobarPelota8, 14000);
  setInterval(comprobarPelota9, 15000);
  setInterval(comprobarPelota10, 16000);
  setInterval(agrandarBase, 8000);
};

const logKey = (e) => {
  e.preventDefault();
  base.borrar();
  base.moverBase(e.key);
  base.dibujar();
};

document.addEventListener("keydown", logKey);

window.addEventListener("load", cargaInicial);
