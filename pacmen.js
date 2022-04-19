var pos = 0;
var direction = 0;

const pacArray = [
    ['./images/PacMan1.png', './imagesimages/PacMan2.png'],
    ['./imagesimages/PacMan3.png', './imagesimages/PacMan4.png']
];

const pacMen = []; // This array holds all the pacmen

function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    }
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
   
    let velocity = setToRandom(10);
    let position = setToRandom(200);
    // Add image to div id = game
    let game = document.getElementById('game');
    let newimg = document.createElement('img');
    newimg.style.position = 'absolute';
    newimg.src = './images/PacMan1.png';
    newimg.width = 100;
    newimg.style.top = position.y;
    newimg.style.left = position.x;

    // add new Child image to game
    game.appendChild(newimg); 
    return {
        position,
        velocity,
        newimg
    }
}

//loop over pacmen array and move each one and move image in DOM
function update() {
    
    pacMen.forEach((item) => {
        checkCollisions(item)
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        item.newimg.style.left = item.position.x;
        item.newimg.style.top = item.position.y;
    })
    setTimeout(update, 20);
}

//checking the screen edge
function checkCollisions(item) { 
    if (
item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
item.position.x + item.velocity.x < 0
)
item.velocity.x = -item.velocity.x;
if (
item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
item.position.y + item.velocity.y < 0
)
item.velocity.y = -item.velocity.y;
}

// add a new PacMan
function makeOne() {
    pacMen.push(makePac()); 
}