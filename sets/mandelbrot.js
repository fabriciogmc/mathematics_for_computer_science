/* Function that verifies if some (x,y) point
** belongs to mandelbrot set
**
** Author: Fabrício Galende M. de Carvalho, DSc
*/
MAX_Z_AMPLITUDE= 2;
MAX_Z_ITER = 1000;

function is_mandelbrot(z,c){
  
  iter = 0;
  while((z.im*z.im + z.re*z.re < MAX_Z_AMPLITUDE*MAX_Z_AMPLITUDE) && iter < MAX_Z_ITER){
    z = math.add(math.multiply(z,z), c);
    ++iter;
  } 
  if (iter >= MAX_Z_ITER)
    return {status: true, iter: iter, z: z};
  else
    return {status: false, iter: iter, z: z};
}

function is_julia(z,c){
  return is_mandelbrot(c,z);
}


