class UserShip extends GameObject{

    constructor(imageSrc, x, y, width) {
        super(imageSrc, x, y, width)

        this.left = parseInt(x);
        this.bottom = parseInt(y);
        this.typeOf = UserShip

    }

    moveLeft() {
        this.left = this.left - 20
        this.image.style.left = `${this.left}px`
    }

    moveRight() {
        this.left = this.left + 20
        this.image.style.left = `${this.left}px`
    }
}