const displayGame = (user) => {
    changingContainer.innerHTML = ''
    document.body.style.background = "url('gamesfx/img/background-blue.png')"

    createTimer()
    let timer = document.getElementById('timer')
    time = parseInt(timer.innerText.replace(/[^0-9.]/g, ""))
    let increaseTimer = setInterval(() => {
        time = time + 1
        timer.innerText = `Time: ${time}s`
    }, 1000)

    createScoreboard()
    let scoreboard = document.getElementById('scoreboard')
    
    let ship = new UserShip("gamesfx/img/player-blue-1.png", 700, 10, 60)
    
    document.addEventListener('keydown', function(e) {
        if(e.key == "ArrowRight") {
            if(ship.left <= 1365){
                ship.moveRight()
            }
        }
        if(e.key == "ArrowLeft") {
            if(ship.left >= 20){
                ship.moveLeft()
            }
        }
    }, true)
    
    lasers = []
    document.addEventListener("keyup",function(e){
        if (e.code === "Space") {
            let leftLaser = new Laser("gamesfx/img/laser-blue-1.png", parseInt(ship.image.style.left), 20)
            let rightLaser = new Laser("gamesfx/img/laser-blue-1.png", parseInt(ship.image.style.left) + 50, 20)
            lasers.push(leftLaser)
            lasers.push(rightLaser)
        }  
    }, true)
    
    let clearLasers = setInterval(() => {
        lasers.forEach((laser) => {
            if(parseInt(laser.image.style.bottom) > 900){
                laser.destroy()
                lasers = lasers.filter(l => l != laser)
            }
        })
    }, 60/1000)
    
    enemies = []
    let createFBEnemy = setInterval(() => {
        facebookEnemy = new Enemy("gamesfx/img/social-media-icons/facebook-icon-64.png", Math.floor(Math.random() * 1300) , 900)
        enemies.push(facebookEnemy)
    }, 10000)
    
    let createYTEnemy = setInterval(() => {
        youtubeEnemy = new Enemy("gamesfx/img/social-media-icons/youtube-icon-64.png", Math.floor(Math.random() * 1300) , 900)
        enemies.push(youtubeEnemy)
    }, 8000)
    
    let createIGEnemy = setInterval(() => {
        instagramEnemy = new Enemy("gamesfx/img/social-media-icons/instagram-icon-64.png", Math.floor(Math.random() * 1300) , 900)
        enemies.push(instagramEnemy)
    }, 6000)
    
    let createTEnemy = setInterval(() => {
        twitterEnemy = new Enemy("gamesfx/img/social-media-icons/twitter-icon-64.png", Math.floor(Math.random() * 1300) , 900)
        enemies.push(twitterEnemy)
    }, 4000)
    
    let createSCEnemy = setInterval(() => {
        snapchatEnemy = new Enemy("gamesfx/img/social-media-icons/snapchat-icon-64.png", Math.floor(Math.random() * 1300) , 900)
        enemies.push(snapchatEnemy)
    }, 3000)
    
    let createMSEnemy = setInterval(() => {
        myspaceEnemy = new Enemy("gamesfx/img/social-media-icons/myspace-icon-64.png", Math.floor(Math.random() * 1300) , 900)
        enemies.push(myspaceEnemy)
    }, 2000)
    
    let clearEnemies = setInterval(() => {
        enemies.forEach((enemy) => {
            if(parseInt(enemy.image.style.bottom) < -100){
                enemy.destroy()
                enemies = enemies.filter(e => e != enemy)
            }
        })
    }, 1000)
    
    let checkForContact = setInterval(() => {
        
        lasers.forEach( laser => {
            enemies
            .filter(isOverlapping(laser))
            .forEach( enemy => {
                score = parseInt(scoreboard.innerText.replace(/[^0-9.]/g, ""))
                laser.destroy();
                if(enemy.image.src != "file:///Users/flatironstudent/Desktop/Joseph/Module%203/social-justice/frontend/gamesfx/img/social-media-icons/myspace-icon-64.png"){
                    enemy.destroy();
                    enemies = enemies.filter(e => e != enemy)
                }
                if(enemy.image.src == "file:///Users/flatironstudent/Desktop/Joseph/Module%203/social-justice/frontend/gamesfx/img/social-media-icons/facebook-icon-64.png"){
                    updateScoreboard(score, 50)
                }
                if(enemy.image.src == "file:///Users/flatironstudent/Desktop/Joseph/Module%203/social-justice/frontend/gamesfx/img/social-media-icons/youtube-icon-64.png"){
                    updateScoreboard(score, 40)
                }
                if(enemy.image.src == "file:///Users/flatironstudent/Desktop/Joseph/Module%203/social-justice/frontend/gamesfx/img/social-media-icons/instagram-icon-64.png"){
                    updateScoreboard(score, 20)
                }
                if(enemy.image.src == "file:///Users/flatironstudent/Desktop/Joseph/Module%203/social-justice/frontend/gamesfx/img/social-media-icons/twitter-icon-64.png"){
                     updateScoreboard(score, 10)
                }
                if(enemy.image.src == "file:///Users/flatironstudent/Desktop/Joseph/Module%203/social-justice/frontend/gamesfx/img/social-media-icons/snapchat-icon-64.png"){
                     updateScoreboard(score, 5)
                }
            })            
        })

        enemies.filter(isOverlapping(ship))
            .forEach( enemy => {
                GameObject.destroyAll()
                gameOver = true
                ship = ''
                clearInterval(increaseTimer)
                clearInterval(createFBEnemy)
                clearInterval(createYTEnemy)
                clearInterval(createIGEnemy)
                clearInterval(createTEnemy)
                clearInterval(createSCEnemy)
                clearInterval(createMSEnemy)
                clearInterval(checkForContact)
                clearInterval(clearLasers)
                clearInterval(clearEnemies)
                
                alert('Game Over')
                
                score = parseInt(scoreboard.innerText.replace(/[^0-9.]/g, ""))
                time = parseInt(timer.innerText.replace(/[^0-9.]/g, ""))
                userGameOver(user, score, time)
        })
        
    }, 60 / 1000)
}