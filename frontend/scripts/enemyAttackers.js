
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