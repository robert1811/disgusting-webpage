let img = document.getElementById('img')
const funnyButton = document.getElementById('funnyButton')

const doTheThing = () =>{
    img.style.display = 'block'
    img.style.animationName = 'identifier';
    img.style.animationDuration = '35s'
    img.style.transition = 'all ease 0.5s'
    const music = new Audio('jojo.mp3')
    music.play()
    
    let images = ['polpot.jpg', 'nato.jpg', 'taboritsky.jpg', 'dun.jpg', 'god.jpg']
    
    const imageChanging = () => {
        img.src = `img/${images[0]}`
        images.shift()
        setTimeout(() => {
            if(images.length === 0) return close()
            imageChanging()
        }, 3000)
    }
    setTimeout(() => imageChanging(), 35000)
}

funnyButton.addEventListener('click', () => {
    doTheThing()
})