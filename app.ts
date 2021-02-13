let city = 'Vietnam'

const button = document.querySelector('button')!

function clickHandler(data: string) {
    console.log(`good morning`, data)
}

if (button) {
    button.addEventListener('click', clickHandler.bind(null, city))
}