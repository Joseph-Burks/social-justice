const displayGame = (user) => {
    changingContainer.innerHTML = ''
    document.body.style.background = "url('gamesfx/img/background-blue.png')"

    let timer = document.createElement('button')
    timer.setAttribute('class', 'btn-lg btn-outline-secondary')
    timer.setAttribute('disabled', true)
    let time = 0
    timer.innerText = `Time: ${time}s`
    let increaseTimer = setInterval(() => {
        time = time + 1
        timer.innerText = `Time: ${time}s`
    }, 1000)
    changingContainer.append(timer)
    
    let score = 0
    let scoreboard = document.createElement('button')
    scoreboard.setAttribute('class', 'btn-lg btn-outline-secondary ml-auto')
    scoreboard.setAttribute('disabled', true)
    scoreboard.innerText = `Score: ${score}`
    changingContainer.append(scoreboard)
    
    
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
    })

    lasers = []
    document.addEventListener("keyup",function(e){
        if (e.code === "Space") {
        let leftLaser = new Laser("gamesfx/img/laser-blue-1.png", parseInt(ship.image.style.left), 20)
        let rightLaser = new Laser("gamesfx/img/laser-blue-1.png", parseInt(ship.image.style.left) + 50, 20)
        lasers.push(leftLaser)
        lasers.push(rightLaser)
        }  
    })

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
    }, 5000)

    let createMSEnemy = setInterval(() => {
        myspaceEnemy = new Enemy("gamesfx/img/social-media-icons/myspace-icon-64.png", Math.floor(Math.random() * 1300) , 900)
        enemies.push(myspaceEnemy)
    }, 2000)
    
    // let gameOver = false
    // let interval = 5000
    // let createFBEnemy = () => {
    //     if(interval > 1000){interval = interval - 100}
    //     facebookEnemy = new Enemy("gamesfx/img/social-media-icons/facebook-icon-64.png", Math.floor(Math.random() * 1300) , 900)
    //     enemies.push(facebookEnemy)
    //     setTimeout(() => {
    //         if(!gameOver){}
    //             createFBEnemy()
    //     }, interval)
    // }
    // createFBEnemy()


    let checkForContact = setInterval(() => {

        lasers
            .forEach( laser => {
                enemies
                    .filter( isOverlapping(laser) )
                    .forEach( enemy => {
                        laser.destroy();
                        if(enemy.image.src != "file:///Users/flatironstudent/Desktop/Joseph/Module%203/social-justice/frontend/gamesfx/img/social-media-icons/myspace-icon-64.png"){
                            enemy.destroy();
                        }
                        if(enemy.image.src == "file:///Users/flatironstudent/Desktop/Joseph/Module%203/social-justice/frontend/gamesfx/img/social-media-icons/facebook-icon-64.png"){
                            score = score + 50
                            scoreboard.innerText = `Score: ${score}`
                        }
                        if(enemy.image.src == "file:///Users/flatironstudent/Desktop/Joseph/Module%203/social-justice/frontend/gamesfx/img/social-media-icons/youtube-icon-64.png"){
                            score = score + 40
                            scoreboard.innerText = `Score: ${score}`
                        }
                        if(enemy.image.src == "file:///Users/flatironstudent/Desktop/Joseph/Module%203/social-justice/frontend/gamesfx/img/social-media-icons/instagram-icon-64.png"){
                            score = score + 20
                            scoreboard.innerText = `Score: ${score}`
                        }
                        if(enemy.image.src == "file:///Users/flatironstudent/Desktop/Joseph/Module%203/social-justice/frontend/gamesfx/img/social-media-icons/twitter-icon-64.png"){
                            score = score + 10
                            scoreboard.innerText = `Score: ${score}`
                        }
                    })

            })

        enemies
            .filter(isOverlapping(ship))
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

                alert('Game Over')
                fetch('http://localhost:3000/games', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user_id: `${user.id}`,
                        score: `${score}`,
                        time: `${time}`
                    })
                }).then((res) => res.json())
                .then((res) => {
                    fetch(`http://localhost:3000/users/show/${res.user_id}`)
                    .then((res) => res.json())
                    .then((res) => {
                        document.body.style.background = "white"
                        displayUserHome(res)
                    })
                })
            })
    
    }, 60 / 1000)

    let isOverlapping = function (object1) {
        return function(object2){ 
            return (object1.leftSide() < object2.rightSide() &&
            object1.rightSide() > object2.leftSide() &&
            object1.topSide() < object2.bottomSide() &&
            object1.bottomSide() > object2.topSide())
        }
    }
    
}