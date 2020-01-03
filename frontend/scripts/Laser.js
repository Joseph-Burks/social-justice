class Laser extends GameObject{

    constructor(imageSrc, x, y, width) {
        super(imageSrc, y)

        this.image.style.left = `${x}px`
        this.left = parseInt(x);
        this.bottom = parseInt(y);
        this.width = parseInt(width);
        this.speed = 5;
    
        setInterval( () => this.move(), 1)
    }


    move() {
        this.bottom = this.bottom + this.speed;
        if(this.bottom > -100){
            this.image.style.bottom = `${this.bottom}px`
        }else{
            this.destroy()
        }
    }
}