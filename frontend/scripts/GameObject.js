class GameObject {

    static all = []

    static destroyAll() {
        GameObject.all.forEach(function (object) {
            object.destroy()
        })
    }

    destroy() {
        this.image.remove()
        GameObject.all = GameObject.all.filter(object => object != this)
    }

    constructor(imageSrc, x, y, width){
        this.image = document.createElement('img')
        changingContainer.append(this.image)
        this.image.style.width = `${width}px`
        this.image.style.position = 'absolute'
        this.image.style.left = `${x}px`
        this.image.style.bottom = `${y}px`
        this.image.src = imageSrc

        GameObject.all.push(this)
    }

    width(){
        let dimensions = this.image.getBoundingClientRect()
        return dimensions.width
    }

    height(){
        let dimensions = this.image.getBoundingClientRect()
        return dimensions.height
    }

    leftSide(){
        let dimensions = this.image.getBoundingClientRect()
        return dimensions.left
    }

    rightSide(){
        let dimensions = this.image.getBoundingClientRect()
        return dimensions.right
    }

    topSide(){
        let dimensions = this.image.getBoundingClientRect()
        return dimensions.top
    }

    bottomSide(){
        let dimensions = this.image.getBoundingClientRect()
        return dimensions.bottom
    }

}