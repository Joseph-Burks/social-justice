const displayUserHome = (user) => {
    changingContainer.innerHTML = ''

    let leftSideCol = document.createElement('div')
    leftSideCol.setAttribute('class', 'col')
    
    let rightSideCol = document.createElement('div')
    rightSideCol.setAttribute('class', 'col')

    let usernameTag = document.createElement('button')
    usernameTag.setAttribute('class', 'btn-lg btn-secondary btn-block')
    usernameTag.setAttribute('disabled', true)
    usernameTag.innerText = `${user.username}`
    leftSideCol.append(usernameTag)

    let bigSpacerDiv = document.createElement('div')
    bigSpacerDiv.setAttribute('style', 'height: 30px;')
    leftSideCol.append(bigSpacerDiv)

    let startNewGameButton = document.createElement('button')
    startNewGameButton.setAttribute('class', 'btn-lg btn-success btn-block')
    startNewGameButton.innerText = 'Start New Game'
    rightSideCol.append(startNewGameButton)

    let bigSpacerDivTwo = document.createElement('div')
    bigSpacerDivTwo.setAttribute('style', 'height: 30px;')
    rightSideCol.append(bigSpacerDivTwo)

    if(Array.from(user.games).length > 0) {
        let topScores = createListCard(`${user.username}'s Top Scores`, userTopTenScores(user))
        leftSideCol.append(topScores)
        
        let recentGames = createListCard(`${user.username}'s Last 10 Games`, userRecentGames(user))
        rightSideCol.append(recentGames)
    }

    changingContainer.append(leftSideCol)
    changingContainer.append(rightSideCol)

    startNewGameButton.addEventListener('click', () => displayGame(user))
}