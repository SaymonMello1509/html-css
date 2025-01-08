const optionImage = document.querySelectorAll('.option-image')
const container = document.querySelector('.container')
const resultText = document.querySelector('.result-text')
const computerResult = document.querySelector('.computer-result img')
const userResult = document.querySelector('.user-result img')

const computerSrcImages = ['imagens/pedra.png','imagens/papel.png','imagens/tesoura.png']

function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    const clickedIndex = Array.from(optionImage).indexOf(clickedImage)
    

    container.classList.add('start')
    resultText.innerHTML = 'jo... ken.. pow'

    userResult.src = computerResult.src = computerSrcImages[0]

    setTimeout(() => {
        container.classList.remove('start')

        userResult.src  =computerSrcImages[clickedIndex]

        const randomNumber =  Math.floor(Math.random() * computerSrcImages.length)
        computerResult.src = computerSrcImages[randomNumber]

        resultText.innerHTML = 'X ganhou'
        
    }, 2000);
}


optionImage.forEach(img => {
    img.addEventListener('click', handleOptionClick)
})