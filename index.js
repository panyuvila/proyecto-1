console.log('Starting Application')
const messageElement = document.getElementById('messageElement')
const myButton = document.getElementById('myButton')
myButton.addEventListener('click', function(){
    console.log('Clic en el botón!')
    messageElement.textContent = 'Clic en el botón'
})