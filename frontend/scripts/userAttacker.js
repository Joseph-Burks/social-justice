





const displayGame = function(user) {
    document.body.style.background = "url('gamesfx/img/background-blue.png')"
    const window = document.querySelector("#changing-container")
    window.innerHTML = ''


    const enemyGridContainerDiv = document.createElement("div")
    enemyGridContainerDiv.setAttribute("class", "enemy-grid-container")
    enemyGridContainerDiv.style.display = "grid"
    enemyGridContainerDiv.style.gridTemplateColumns = "auto auto auto auto auto auto"
    enemyGridContainerDiv.style.gridColumnGap = "60px"
    enemyGridContainerDiv.style.top = "100px"

    window.append(enemyGridContainerDiv)

    const enemyDivSnapchat = document.createElement("div")
    enemyDivSnapchat.setAttribute("class", "snapchat-div")
    
    // enemyDivSpapchat.style.display = "grid-item"

    enemyGridContainerDiv.append(enemyDivSnapchat)
    
    const snapchatEnemy = document.createElement("img")
    snapchatEnemy.src = "gamesfx/img/social-media-icons/snapchat-icon-64.png"
    // snapchatEnemy.setAtrribute("class", "snapchat")

    enemyDivSnapchat.append(snapchatEnemy)



    const enemyDivInstagram =  document.createElement("div")
    enemyDivInstagram.setAttribute("class", "instagram-div")

    enemyGridContainerDiv.append(enemyDivInstagram)

    const instagramEnemy = document.createElement("img")
    instagramEnemy.src = "gamesfx/img/social-media-icons/instagram-icon-64.png"

    enemyDivInstagram.append(instagramEnemy)




    const enemyDivTwitter =  document.createElement("div")
    enemyDivTwitter.setAttribute("class", "twitter-div")

    enemyGridContainerDiv.append(enemyDivTwitter)

    const twitterEnemy = document.createElement("img")
    twitterEnemy.src = "gamesfx/img/social-media-icons/twitter-icon-64.png"

    enemyDivTwitter.append(twitterEnemy)



    const enemyDivMySpace =  document.createElement("div")
    enemyDivMySpace.setAttribute("class", "myspace-div")

    enemyGridContainerDiv.append(enemyDivMySpace)

    const myspaceEnemy = document.createElement("img")
    myspaceEnemy.src = "gamesfx/img/social-media-icons/myspace-icon-64.png"

    enemyDivMySpace.append(myspaceEnemy)



    const enemyDivYoutube =  document.createElement("div")
    enemyDivYoutube.setAttribute("class", "myspace-div")

    enemyGridContainerDiv.append(enemyDivYoutube)

    const youtubeEnemy = document.createElement("img")
    youtubeEnemy.src = "gamesfx/img/social-media-icons/youtube-icon-64.png"

    enemyDivYoutube.append(youtubeEnemy)



    const enemyDivFaceBook =  document.createElement("div")
    enemyDivFaceBook.setAttribute("class", "myspace-div")

    enemyGridContainerDiv.append(enemyDivFaceBook)

    const facebookEnemy = document.createElement("img")
    facebookEnemy.src = "gamesfx/img/social-media-icons/facebook-icon-64.png"

    enemyDivFaceBook.append(facebookEnemy)



    



    







    const userAttacker = document.createElement("img")

    userAttacker.style.width = "100px"
    userAttacker.style.position = "absolute"
    userAttacker.style.left = "450px"
    userAttacker.style.top = "600px"

    // "https://publicdomainvectors.org/photos/Rocket11.png"
    
    userAttacker.src = "gamesfx/img/player-blue-1.png"

    userAttacker.setAttribute("class","user-attacker")
    
    window.append(userAttacker)


    document.addEventListener('keydown', function(e) {
        // console.log(e)
        if (e.key == "ArrowRight") {
            left = parseInt( userAttacker.style.left) + 20
            userAttacker.style.left = `${left}px`
            
        }
        
        if (e.key == "ArrowLeft") {
            left = parseInt( userAttacker.style.left) - 20
            userAttacker.style.left = `${left}px`
          
        }

    })



    document.addEventListener("keyup",function(e){
        
        if (e.code === "Space") {
        // console.log("space-man")
        createLaser()
        // moveLaser()
        }
        
    })

    const createLaser = function() {
        let laser = document.createElement("img")
        laser.src = "gamesfx/img/laser-blue-1.png"
        laser.style.position = "absolute"
        laser.style.width = '10px' 
        laser.style.left = `${parseInt(userAttacker.style.left) + parseInt(userAttacker.style.width)/2 - parseInt(laser.style.width)/2}px`
        laser.style.top = '600px'
    

        laser.setAttribute("class", "laser")

        window.append(laser)

 
        const moveLaser = function(laser) {
            let top = parseInt(laser.style.top) - 5
            laser.style.top = `${top}px`
           }


        let interval = setInterval(()=>moveLaser(laser), 100/1000)
        setTimeout(()=>{
            clearInterval(interval)
            laser.remove()
        },500)

         


    }


}