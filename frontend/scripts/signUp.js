const displaySignUp = () => {
    const window = document.getElementById('changing-container')
    window.innerHTML = ''
    let windowCol = document.createElement('div')
    windowCol.setAttribute('class', 'col text-center')

    let bigSpacerDiv = document.createElement('div')
    bigSpacerDiv.setAttribute('style', 'height: 30px;')

    let signUpForm = document.createElement('div')

    let usernameDiv = document.createElement('div')
    let usernameInput = document.createElement('input')
    usernameInput.setAttribute('placeholder', 'Create Username')

    let spacerDiv = document.createElement('div')
    spacerDiv.setAttribute('style', 'height: 10px;')

    let passwordDiv = document.createElement('div')
    let passwordInput = document.createElement('input')
    passwordInput.setAttribute('placeholder', 'Create Password')
    passwordInput.setAttribute('type', 'password')
    
    let spacerDivTwo = document.createElement('div')
    spacerDivTwo.setAttribute('style', 'height: 10px;')

    let signUpButtonDiv = document.createElement('div')
    let signUpButton = document.createElement('button')
    signUpButton.setAttribute('class', 'btn-lg btn-dark')
    signUpButton.innerText = 'Sign Up'

    usernameDiv.append(usernameInput)
    passwordDiv.append(passwordInput)
    signUpButtonDiv.append(signUpButton)
    signUpForm.append(usernameDiv)
    signUpForm.append(spacerDiv)
    signUpForm.append(passwordDiv)
    signUpForm.append(spacerDivTwo)
    signUpForm.append(signUpButtonDiv)

    windowCol.append(bigSpacerDiv)
    windowCol.append(signUpForm)
    window.append(windowCol)

    signUpButton.addEventListener('click', () => {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: `${usernameInput.value}`,
                password: `${passwordInput.value}`
            })
        }).then((res) => res.json())
        .then((res) => displayUserHome(res))
    })
}