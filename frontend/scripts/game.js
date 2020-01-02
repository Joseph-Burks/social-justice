const displayGame = (user) => {
    document.body.style.background = "url('gamesfx/img/background-blue.png')"
    const window = document.querySelector("#changing-container")
    window.innerHTML = ''

    displayUserAttacker()
    displayEnemy()
    
}