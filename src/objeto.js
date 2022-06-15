class Objeto {
    constructor(x, y, ancho, alto, imagen, ctx) {
      this.x = x;
      this.y = y;
      this.ancho = ancho;
      this.alto = alto;
      this.imagen = imagen;
      this.ctx = ctx;
      this.contador = 4;
      this.score = document.getElementById('score')
    }
  
    dibujar() {
      ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
    }
  
    borrar() {
      ctx.clearRect(this.x, this.y, this.ancho, this.alto);
    }
  
    detectarColision = (otroObjeto) => {
      if (otroObjeto.y + otroObjeto.alto < this.y) {
        return "";
      }
      if (otroObjeto.x + otroObjeto.ancho < this.x) {
        return "";
      }
      if (this.y + this.alto < otroObjeto.y) {
        return "";
      }
      if (this.x + this.ancho < otroObjeto.x) {
        return "";
      }
  
      if (otroObjeto.y + otroObjeto.alto === this.y ) {
        return "colision-superior";
      }
  
      if (otroObjeto.x + otroObjeto.ancho === this.x) {
        return "colision-izquierda";
      }
  
      if (otroObjeto.x === this.x + this.ancho) {
        return "colision-derecha";
      }
  
      if (this.y + this.alto === otroObjeto.y) {
      
        return "colision-inferior";
      }
  
      return "colision";
    };
  
    comprobarPosicionEnCanvas() {
      if (this.x >= ctx.canvas.width - this.ancho) {
        return "derecha";
      }
      if (this.x <= 0) {
        return "izquierda";
      }
      if (this.y <= 0) {
        return "arriba";
      }
      if (this.y >= ctx.canvas.height - this.alto) {
        //const score = document.getElementById('score')
        //this.contador = this.contador - 1;
        //this.score.innerHTML = this.contador;
       // console.log(this.contador)
        return "abajo";
      }
      return "dentro";
    }

    returnContador(){
      return this.contador

    }
  }
  