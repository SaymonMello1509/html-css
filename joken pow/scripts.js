const optionImage = document.querySelectorAll('.option-image')
const container = document.querySelector('.container')
const resultText = document.querySelector('.result-text')
const computerResult = document.querySelector('.computer-result img')
const userResult = document.querySelector('.user-result img')

const computerSrcImages = ['imagens/pedra.png','imagens/papel.png','imagens/tesoura.png']


const winner = {
    RR: 'Empate',
    RP: 'Você',
    RS: 'Computador',
    PP: 'Empate',
    PR: 'Você',
    PS: 'Computador',
    SS: 'Empate',
    SR: 'Computador',
    SP: 'Você'
}

function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    const userIndex = Array.from(optionImage).indexOf(clickedImage)
    

    container.classList.add('start')
    resultText.innerHTML = 'jo... ken.. pow'

    userResult.src = computerResult.src = computerSrcImages[0]

    setTimeout(() => {
        container.classList.remove('start')

        userResult.src  =computerSrcImages[userIndex]

        const randomNumber =  Math.floor(Math.random() * computerSrcImages.length)
        computerResult.src = computerSrcImages[randomNumber]


        const userValue = ['R', 'P', 'S'][userIndex]
        const computerValue = ['R', 'P', 'S'][randomNumber]
        const finalResult = userValue + computerValue

        console.log(finalResult)

        resultText.innerHTML = userValue === computerValue ? 'Empate!' : finalResult + 'Ganhou!!'
        
    }, 2000);
}


optionImage.forEach(img => {
    img.addEventListener('click', handleOptionClick)
})