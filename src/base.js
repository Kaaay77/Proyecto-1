


class Base {
    // Le damos ls parametros basicos de la BASE. 
    constructor( x, y, ancho,alto,imagen){
        this.x = x;
        this.y = y;
        this.alto = alto;
        this.ancho = ancho;
        this.imagen = imagen;
    }

    // Metodo para crear / dibujar la imagen en el movimiento.
    dibujar() {
        ctx.drawImage(this.imagen, this.x, this.y, this.ancho, this.alto);
    }

    // Metodo para borrar el rastro de la BASE.
    borrar(){
        ctx.clearRect(this.x, this.y, this.ancho, this.alto);
    }

    // Con este metodo imolementamos el movimiento de Izq y Der de la BASE
    moverBase(key){
        if (key === "ArrowLeft"){
            if (this.x > 0){
                this.x = this.x -100;
            }
        }
        if (key === "ArrowRight"){
            if (this.x < ctx.canvas.width - this.ancho){
                this.x = this.x + 100;
            }
        }
    }


}