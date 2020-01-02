





const displayGame = function(user) {
    document.body.style.background = "url('gamesfx/img/background-blue.png')"
    const window = document.querySelector("#changing-container")
    window.innerHTML = ''


  

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