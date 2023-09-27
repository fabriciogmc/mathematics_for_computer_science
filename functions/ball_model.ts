let my_screen = document.getElementById('game_screen') as HTMLCanvasElement;
const context = my_screen.getContext('2d') as CanvasRenderingContext2D;

let centerX = my_screen.width / 2;
let centerY = my_screen.height / 2;

function draw_circle(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, centerX: number, centerY:number){
    
    const radius = my_screen.height/5;
    context.clearRect(0,0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'white';
    context.fill();
}

let my_button = document.getElementById('redraw_button') as HTMLElement;
my_button.onclick = function (){
    setInterval( function (){draw_circle(my_screen, context, centerX, centerY)}, 500);
    //draw_circle(my_screen, context);
};

document.onkeydown = function(event){
    var name = event.key;
    var code = event.code;
    if(name =="ArrowRight"){
        centerX +=10;
    }
    if(name =="ArrowLeft"){
        centerX -=10;
    }    
}

