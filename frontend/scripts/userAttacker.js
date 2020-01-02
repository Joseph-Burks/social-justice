const displayUserAttacker = function() {
    const window = document.querySelector("#changing-container")
    window.innerHTML = ''
    
    const userAttacker = document.createElement("img")

    userAttacker.style.width = "50px"
    userAttacker.style.position = "absolute"
    userAttacker.style.left = "700px"
    userAttacker.style.top = "740px"
    
    userAttacker.src = "gamesfx/img/player-blue-1.png"

    userAttacker.setAttribute("class","user-attacker")
    
    window.append(userAttacker)


    document.addEventListener('keydown', function(e) {
        if (e.key == "ArrowRight") {
            if(parseInt( userAttacker.style.left) <= 1365){
                left = parseInt( userAttacker.style.left) + 20
                userAttacker.style.left = `${left}px`
            }
        }
        
        if (e.key == "ArrowLeft") {
            if(parseInt( userAttacker.style.left ) >= 20){
                left = parseInt( userAttacker.style.left) - 20
                userAttacker.style.left = `${left}px`
            }
          
        }

    }, true)



    document.addEventListener("keyup",function(e){
        
        if (e.code === "Space") {
        createLaser()
        }
        
    })

    const createLaser = function() {
        let laser = document.createElement("img")
        laser.src = "gamesfx/img/laser-blue-1.png"
        laser.style.position = "absolute"
        laser.style.width = '10px' 
        laser.style.left = `${parseInt(userAttacker.style.left) + parseInt(userAttacker.style.width)/2 - parseInt(laser.style.width)/2}px`
        laser.style.top = `${parseInt(userAttacker.style.top)}px`
    

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
        },800)
    }
}