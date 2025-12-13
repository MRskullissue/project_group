let block = document.querySelector('.comments')
document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
     let dy = e.pageY - window.innerHeight / 2
     let angleX = 20 * dx / window.innerWidth / 2
     let angleY = 20 * dY / window.innerHeight / 2
     block.style.transform = `rotateX(${angleX}deg)  rotateY(${angleY}deg) ` 
})


