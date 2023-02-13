const box = document.querySelector('.box')

let positionX = 0;
let positionY = 0;

const move = () => {
    if (positionX <= 349 && positionY === 0) {
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 349 && positionY <= 349) {
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    } 
    else if (positionX >= 0 && positionY >= 349)  {
        positionX--
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if(positionY >= 0){
        positionY--
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
}
}
move()



const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const number = document.querySelector('span')
    
let timerId;

start.addEventListener('click', function() {
	let num = 0;
	
	timerId = setInterval(function() {
		num++
        number.innerHTML = `${num}`
        number.style.color = 'green'
	}, 1000);
});

stop.addEventListener('click', function() {
	clearInterval(timerId);
    number.style.color = 'red'
});