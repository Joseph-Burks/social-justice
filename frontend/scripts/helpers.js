const createListCard = (header, list) => {
    let cardCol = document.createElement('div')
    cardCol.setAttribute('class', 'col')
    let cardDiv = document.createElement('div')
    cardDiv.setAttribute('class', 'card')

    let headerDiv = document.createElement('div')
    headerDiv.setAttribute('class', 'card-header')
    headerDiv.innerText = header
    cardDiv.append(headerDiv)

    let ul = document.createElement('ul')
    ul.setAttribute('class', 'list-group list-group-flush')
    list.forEach((listItem) => {
        let li = document.createElement('li')
        li.setAttribute('class', 'list-group-item')
        li.innerText = `${list.indexOf(listItem) + 1}    |    Time: ${listItem.time}s    |    Score: ${listItem.score}`
        ul.append(li)
    })
    cardDiv.append(ul)
    cardCol.append(cardDiv)
    return cardCol
}

const createLeaderboard = (header, list) => {
    let cardCol = document.createElement('div')
    cardCol.setAttribute('class', 'col')
    let cardDiv = document.createElement('div')
    cardDiv.setAttribute('class', 'card')

    let headerDiv = document.createElement('div')
    headerDiv.setAttribute('class', 'card-header')
    headerDiv.innerText = header
    cardDiv.append(headerDiv)

    let ul = document.createElement('ul')
    ul.setAttribute('class', 'list-group list-group-flush')
    list.forEach((listItem) => {
        fetch(`http://localhost:3000/users/show/${listItem.user_id}`)
            .then((res) => res.json())
            .then((res) => {
                let li = document.createElement('li')
                li.setAttribute('class', 'list-group-item')
                li.innerText = `${list.indexOf(listItem) + 1}    |    User: ${res.username}    |    Time: ${listItem.time}s    |    Score: ${listItem.score}`
                ul.append(li)
            })
    })
    cardDiv.append(ul)
    cardCol.append(cardDiv)
    return cardCol
}

const userTopTenScores = (user) => {
    
    let userGames = Array.from(user.games)
    const compare = (a, b) => {
        if (parseInt(a.score) > parseInt(b.score)) return 1;
        if (parseInt(b.score) > parseInt(a.score)) return -1;
      
        return 0;
      }
    userGames.sort(compare)

    let userTopTenScores = []
    let i = userGames.length - 1;
    while(i > userGames.length - 11 && i >= 0) {
        userTopTenScores.push(userGames[i])
        i -= 1
    }
    return userTopTenScores
}

const userRecentGames = (user) => {
    let userGames = Array.from(user.games)

    let userRecentGames = []
    let i = userGames.length - 1;
    while(i > userGames.length - 11 && i >= 0) {
        userRecentGames.push(userGames[i])
        i -= 1
    }
    return userRecentGames
}

const topTenGames = (games) => {
    let allGames = Array.from(games)
    const compare = (a, b) => {
        if (parseInt(a.score) > parseInt(b.score)) return 1;
        if (parseInt(b.score) > parseInt(a.score)) return -1;
            
        return 0;
    }
    allGames.sort(compare)

    let topTenScores = []
    let i = allGames.length - 1;
    while(i > allGames.length - 11 && i >= 0) {
        topTenScores.push(allGames[i])
        i -= 1
    }
    return topTenScores
}

const createTimer = () => {
    let timer = document.createElement('button')
    timer.setAttribute('class', 'btn-lg btn-outline-secondary')
    timer.setAttribute('id', 'timer')
    timer.setAttribute('disabled', true)
    let time = 0
    timer.innerText = `Time: 0s`
    changingContainer.append(timer)
}
const createScoreboard = () => {
    let scoreboard = document.createElement('button')
    scoreboard.setAttribute('class', 'btn-lg btn-outline-secondary ml-auto')
    scoreboard.setAttribute('id', 'scoreboard')
    scoreboard.setAttribute('disabled', true)
    scoreboard.innerText = `Score: 0`
    changingContainer.append(scoreboard)
}

const updateScoreboard = (score, points) => {
    let scoreboard = document.getElementById('scoreboard')
    scoreboard.innerText = `Score: ${score + points}`
}

const isOverlapping = function (object1) {
    return function(object2){ 
        return (object1.leftSide() < object2.rightSide() &&
        object1.rightSide() > object2.leftSide() &&
        object1.topSide() < object2.bottomSide() &&
        object1.bottomSide() > object2.topSide())
    }
}

const userGameOver = (user, score, time) => {
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
}