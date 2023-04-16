let xAcross = 10;

const canvas = document.querySelector('.canvas');
const colourPicker = document.querySelector('#colourPicker')

let colour = 'black'
let isDrawing = false

colourPicker.addEventListener('input', () => colour = colourPicker.value);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseleave', () => isDrawing = false);

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
    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach(pixel => {       
        pixel.addEventListener('mousemove', function () {
            if (isDrawing) this.style.backgroundColor = colour;
        })
        pixel.addEventListener('click', function () {
            this.style.backgroundColor = colour;
        })
        })
        
        //this bit took ages!!! Mostly copied from stack overflow.
        canvas.addEventListener("touchmove", function(e) {
            let touch = e.touches[0];
            // get the DOM element that the touch is over
            let element = document.elementFromPoint(touch.clientX, touch.clientY);
            // make sure the element selected is actually a pixel
            if (element.classList.contains('pixel')) {
                element.style.backgroundColor = colour;
            }
            
        });
    }

initialise(xAcross);