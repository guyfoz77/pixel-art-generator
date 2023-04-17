# Pixel Art Generator

This software allows a user to create pixel art.
---

Click the squares to fill them with the selected colour, and change the colour using the selectors below the main canvas.

## Future of this mini project.
There are no plans to expand the project currently, but some ideas are below:
- Allow the user to change the number of pixels in the canvas
- non-rectangular canvas
- fill function
- erase all

## Code
The code is fairly simple.

`createRow(xAcross)` simply creates lots of pixels, as well as a row, and inserts the pixels within that row. `xAcross` is what defines how many pixels wide and high it is. This initally was just going to define how wide it is but it currently does both as the filled canvas is always rendered square.

`initilise()` takes the rows, and inserts them into the canvas. Following this, it attaches event listeners to all of the pixels to respond to mouse clicks, finger touches, and it handles mouse drags and finger drags too.
- mouse drags
  - When the user mousedowns inside the canvas, the `isDrawing` variable is set to true. When the pointer moves across a pixel with this set to true, it will colour the pixel.
  - When the user releases the mouse button, or the cursor is moved outside of the canvas, `isDrawing` returns to false.
- Touch drags
  - When the user touches within the canvas, an eventlistener on the canvas will return the touch position and colour any element touched, as long as it has the `.pixel` class.


