const displayLeaderboard = () => {
    changingContainer.innerHTML = ''

    let home = document.getElementById('home')
    home.addEventListener('click', () => displayLogin())
    
    let changingContainerCol = document.createElement('div')
    changingContainerCol.setAttribute('class', 'col text-center')

    fetch('http://localhost:3000/games')
        .then((res) => res.json())
        .then((res) => {
            let leaderboard = createLeaderboard('Top 10 Games', topTenGames(res))
            changingContainerCol.append(leaderboard)
            changingContainer.append(changingContainerCol)
        })
}