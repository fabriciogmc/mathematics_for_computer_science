/* File used to generate mandelbrot sets
**
** Author: Fabrício Galende M. de Carvalho, DSc
*/

/*
Conversion equations (re,img) --> (x,y):
y:
  0 ------------------- MAX_Y
  y --------------------img
  (height-1) ---------- MIN_Y

  (y-0)/(height-1) = (img-MAX_Y)/MIN_Y-MAX_Y
  y = math.round((height-1)*(img-MAX_Y)/(MIN_Y-MAX_Y))


x:
  0 -------------------  MIN_X
  x -------------------  re
  (width-1) ------------ MAX_X  
 
  x = math.round((width-1)*(re-MIN_X)/(MAX_X-MIN_X)


Conversion equation (array of chanels to matrix)
x = 0 --------- clamped_array = 0
x = 1 --------- clamped_array = 4
x = 2 --------- clamped_array = 8
x = n --------- clamped_array = 4*n
x = (width-1) ----- clamped_array = (width-1)*4


y = 0 --------- clamped_array = 0
y = 1 --------- clamped_array = width*4*1
y = 2 --------- clamped_array = width*4*2
y = n --------- clamped_array = width*4*n
y = (height-1) --clamped_array = width*4*(height-1)
*/

/* canvas limits */
var left = 0;
var top = 0;
var width = 500;
var height = 200;

/* Mandelbrot and Julia set limits */
MIN_X = -3;
MAX_X = +5;
MIN_Y = -3;
MAX_Y = +2;
ALMOST_SET_TOL = 0.02;

/* numerical increment step */
dx = 0.01;
dy = 0.01;



const c = document.getElementById("fractal_plot");
const ctx = c.getContext("2d");
const img_data = ctx.createImageData(width, height);

/* This function converts x,y canvas coordinates to
** clamped array position.
*/
function xy_to_clamped_array(x,y,width){
  clamped_array = x*4 + y*4*width;
  return clamped_array;  
}

/* This function converts complex number
** coordinates to canvas coordinates*
*/

function complex_to_canvas(z, width, height){
  y = math.round( (height-1)*(z.im-MAX_Y)/(MIN_Y-MAX_Y))
  x = math.round( (width-1)*(z.re-MIN_X)/(MAX_X-MIN_X));
  return {x:x, y:y};
}

function generate_mandelbrot(){
  mandelbrot_set = [];
  mandelbrot_set_2 = [];
  re = MIN_X;
  z = math.complex(0,0); // for Mandelbrot set
  //z = math.complex(0.35,0.35); // for Julia set  
  while (re <= MAX_X){
    im = MIN_Y;
    z2 = math.complex(re,im); 
    while (im <= MAX_Y){
      check = is_mandelbrot(z,z2);
      //check = is_julia(z,z2);
      if(check.status == true){
        mandelbrot_set.push(complex_to_canvas(z2,width,height))
      } else if(check.iter > ALMOST_SET_TOL*(MAX_Z_ITER)) {
         mandelbrot_set_2.push(complex_to_canvas(z2,width,height))
      }
      im+=dy;
      z2 = math.complex(re,im);
    }
    re+= dx;
  }
  return [mandelbrot_set, mandelbrot_set_2];
}

mandelbrot_set = generate_mandelbrot();

/* function that checks if coordinate belongs
** to mandelbrot set */
function check_coord(mandelbrot_set, coord){
  for(i=0; i< mandelbrot_set.length; ++ i){
    if(mandelbrot_set[i].x == coord.x &&
       mandelbrot_set[i].y == coord.y )
       return true;
  }
  return false;
}

for (let y = 0; y < height; ++y) {
  for (let x = 0; x< width; ++x){
    is_mandelbrot = check_coord(mandelbrot_set[0],{x:x, y:y});
    is_almost_mandelbrot = check_coord(mandelbrot_set[1],{x:x, y:y});
    c_a = xy_to_clamped_array(x,y,width,height);
    if (is_mandelbrot){
      img_data.data[c_a] = 0;
      img_data.data[c_a+1] = 0;
      img_data.data[c_a+2] = 0;
      img_data.data[c_a+3] = 255;
    }
    else if (is_almost_mandelbrot){
      img_data.data[c_a] = 255;
      img_data.data[c_a+1] = 255;
      img_data.data[c_a+2] = 0;
      img_data.data[c_a+3] = 255;
    }
    else {
      img_data.data[c_a] = 0;
      img_data.data[c_a+1] = 0;
      img_data.data[c_a+2] = 100;
      img_data.data[c_a+3] = 255;
    }
    
  } 
}


ctx.putImageData(img_data,0,0);


