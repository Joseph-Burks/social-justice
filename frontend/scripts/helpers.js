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