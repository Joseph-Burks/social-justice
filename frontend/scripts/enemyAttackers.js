const displayEnemy = () => {
    const window = document.querySelector("#changing-container")


    const createEnemy = function(left, top, src) {
        const enemyUpdateDistance = 3
        const howOftenWeUpdateEnemyPosition = 12
        const timeThatEnemiesAreOnScreen = 6000

    const enemy = document.createElement("img")
    
    enemy.style.position = "absolute"
    enemy.style.left = `${left}px`
    enemy.style.top = `${top}px`
    enemy.src = src
    
    // enemy.setAtrribute("class", "enemies")
    
    window.append(enemy)

    const moveEnemy = function() {
        let top = parseInt(enemy.style.top) + enemyUpdateDistance
        enemy.style.top = `${top}px`
    }


       let enemyInterval = setInterval(moveEnemy, howOftenWeUpdateEnemyPosition)
       setTimeout(()=>{
           clearInterval(enemyInterval)
           enemy.remove()
       },timeThatEnemiesAreOnScreen)

}


const timeBetweenEnemySpawns = 3000
    setInterval(()=>{
        createEnemy(100, -50, "gamesfx/img/social-media-icons/snapchat-icon-64.png")
        createEnemy(250, -15, "gamesfx/img/social-media-icons/instagram-icon-64.png")
        createEnemy(450, -150, "gamesfx/img/social-media-icons/twitter-icon-64.png")
        createEnemy(600, -200, "gamesfx/img/social-media-icons/myspace-icon-64.png")
        createEnemy(850, -400, "gamesfx/img/social-media-icons/youtube-icon-64.png")
        createEnemy(1000, -350, "gamesfx/img/social-media-icons/facebook-icon-64.png")
    }, timeBetweenEnemySpawns)
}