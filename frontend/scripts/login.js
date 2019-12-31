const displayLogin = () => {
    const window = document.getElementById('changing-container')
    window.innerHTML = ''
    let windowCol = document.createElement('div')
    windowCol.setAttribute('class', 'col text-center')

    let bigSpacerDiv = document.createElement('div')
    bigSpacerDiv.setAttribute('style', 'height: 30px;')

    let loginForm = document.createElement('div')

    let usernameDiv = document.createElement('div')
    let usernameInput = document.createElement('input')
    usernameInput.setAttribute('placeholder', 'Username')

    let spacerDiv = document.createElement('div')
    spacerDiv.setAttribute('style', 'height: 10px;')

    let passwordDiv = document.createElement('div')
    let passwordInput = document.createElement('input')
    passwordInput.setAttribute('type', 'password')
    passwordInput.setAttribute('placeholder', 'Password')
    
    let spacerDivTwo = document.createElement('div')
    spacerDivTwo.setAttribute('style', 'height: 10px;')

    let loginButtonDiv = document.createElement('div')
    let loginButton = document.createElement('button')
    loginButton.setAttribute('class', 'btn-lg btn-dark')
    loginButton.innerText = 'Login'

    usernameDiv.append(usernameInput)
    passwordDiv.append(passwordInput)
    loginButtonDiv.append(loginButton)
    loginForm.append(usernameDiv)
    loginForm.append(spacerDiv)
    loginForm.append(passwordDiv)
    loginForm.append(spacerDivTwo)
    loginForm.append(loginButtonDiv)

    let bigSpacerDivTwo = document.createElement('div')
    bigSpacerDivTwo.setAttribute('style', 'height: 50px;')

    let dontHaveAnAccountDiv = document.createElement('div')

    let message = document.createElement('h6')
    message.innerText = "Don't have an account?"

    let signUpButton = document.createElement('button')
    signUpButton.setAttribute('class', 'btn btn-outline-dark')
    signUpButton.innerText = ('Sign Up')

    dontHaveAnAccountDiv.append(message)
    dontHaveAnAccountDiv.append(signUpButton)

    windowCol.append(bigSpacerDiv)
    windowCol.append(loginForm)
    windowCol.append(bigSpacerDivTwo)
    windowCol.append(dontHaveAnAccountDiv)

    window.append(windowCol)

    loginButton.addEventListener('click', () => {
        fetch(`http://localhost:3000/users/login/${usernameInput.value}`)
        .then((res) => res.json())
        .then((res) => {
            if(res.length == 0){
                displaySignUp()
            }else{
                if(usernameInput.value == res[0].username && passwordInput.value == res[0].password){
                displayUserHome(res[0])

                let home = document.getElementById('home')
                home.innerText = 'Dashboard'
                home.addEventListener('click', () => displayUserHome)

                let navUl = document.getElementById('nav-ul')
                let navLi = document.createElement('li')
                navLi.setAttribute('class', 'nav-item-active')

                let liA = document.createElement('a')
                liA.setAttribute('class', 'nav-link btn btn-dark')
                liA.innerText = 'Log Out'

                navLi.append(liA)
                navUl.append(navLi)

                navLi.addEventListener('click', () => {
                    navLi.remove()
                    displayLogin()
                })
                }
            }
        })
    })

    signUpButton.addEventListener('click', () => {
        displaySignUp()
    })
}