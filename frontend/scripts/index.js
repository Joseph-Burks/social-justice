const changingContainer = document.getElementById("changing-container")

document.addEventListener('DOMContentLoaded', () => {

    let leaderboard = document.getElementById('leaderboard')
    leaderboard.addEventListener('click', (e) => {
        displayLeaderboard()
    })

    displayLogin()
    
})