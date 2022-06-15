class Pelota extends Objeto {
    constructor(x, y, ancho, alto, imagen, velocidad, ctx) {
      super(x, y, ancho, alto, imagen, ctx);
      this.direccionX = "derecha";
      this.direccionY = "abajo";
      this.velocidad = velocidad;
      this.audio1 = document.getElementById('audio1')
      
    }
  

    moverPelota() {
      let situacionEnElCanvas = this.comprobarPosicionEnCanvas();
      if (situacionEnElCanvas === "derecha") {
        this.direccionX = "izquierda";
        this.audio1.currentTime = 0;
        this.audio1.play();

      }
      if (situacionEnElCanvas === "izquierda") {
        this.direccionX = "derecha";
        this.audio1.currentTime = 0;
        this.audio1.play();
      }
      if (situacionEnElCanvas === "arriba") {
        this.direccionY = "abajo";
        this.audio1.currentTime = 0;
        this.audio1.play();
      }
      if (situacionEnElCanvas === "abajo") {
        this.direccionY = "arriba";
        if (this.direccionY === "arriba" ){
         // if ( this.returnContador() === 0){
            window.location.replace('./../html/gameOver.html')
         // }

        }
      }
      if (this.direccionX === "derecha") {
        this.x += this.velocidad;
      }
      if (this.direccionX === "izquierda") {
        this.x -= this.velocidad;
      }
      if (this.direccionY === "arriba") {
        this.y -= this.velocidad;
      }
      if (this.direccionY === "abajo") {
        this.y += this.velocidad;
      }
    }
    
  }



  