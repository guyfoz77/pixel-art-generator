let xAcross = 10;

const canvas = document.querySelector('.canvas');

function createPixel() {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    return pixel;
}

function createRow(xAcross) {
    let row = document.createElement('div')
    row.classList.add('row');
    for (let i = xAcross; i >= 1; i--) {
        row.appendChild(createPixel());
    }
    return row;
}

function initialise(xAcross) {  
    canvas.textContent = '';     
    for (let i = xAcross; i >= 1; i--) {    
        canvas.appendChild(createRow(xAcross));  //adds rows to the main container.
    }
//     const pixels = document.querySelectorAll('.pixel');

//     pixels.forEach(pixel => {       //adds event listeners to all the pixels to change opacity on mouseover.
//         pixel.style.opacity = 1;
//         pixel.addEventListener('mouseover', function () {
//             if (!rainbowMode) {
//                 this.style.opacity -= opacityChange;
//             } else {
//                 this.style.backgroundColor = getRandomColour();
//             }
//         })
// })
}

initialise(xAcross);