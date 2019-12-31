const displayLeaderboard = () => {

    let home = document.getElementById('home')
    home.addEventListener('click', () => displayLogin())

    const window = document.getElementById('changing-container')
    window.innerHTML = ''
    let windowCol = document.createElement('div')
    windowCol.setAttribute('class', 'col text-center')

    fetch('http://localhost:3000/games')
        .then((res) => res.json())
        .then((res) => {
            let leaderboard = createLeaderboard('Top 10 Games', topTenGames(res))
            windowCol.append(leaderboard)
            window.append(windowCol)
        })
}