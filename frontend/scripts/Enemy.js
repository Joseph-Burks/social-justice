class Enemy extends GameObject{

    constructor(imageSrc, x, y) {
        super(imageSrc, x, y)

        changingContainer.append(this.image)
        this.left = parseInt(x);
        this.bottom = parseInt(y);
        this.speed = 1;
    
        setInterval( () => this.fall(), 60 / 1000)
    }


    fall() {
        this.bottom = this.bottom - this.speed;
        if(this.bottom > -50){
            this.image.style.bottom = `${this.bottom}px`
        }else{
            this.destroy()
        }
    }
}