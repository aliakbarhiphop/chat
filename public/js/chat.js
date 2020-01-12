const socket = io()

socket.on('countUpdate', (count) => {
    console.log('Count updated :', count)
})

document.querySelector('#increment').addEventListener('click', () => {
    socket.emit('increment')

})