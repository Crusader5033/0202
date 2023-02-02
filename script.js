const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;




var array1=[];
let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

toolbar.addEventListener('change', e => {
    if(e.target.id === 'color') {
        ctx.strokeStyle = e.target.value;
    }

    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
    
});

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY-canvasOffsetY);
    ctx.stroke();
    
    


}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});
var array=[];
const save = document.getElementById('save');
save.addEventListener("click", ()=>{
    array.push(canvas.toDataURL("image/png"));
    localStorage.setItem("paints",JSON.stringify(array))
})


let startingX;
let startingY;
let point1X;
let point1Y;
let point2X;
let point2Y;
let endX;
let endY;


function getPoints(e) {
    var i =0;
    
    array1.push(e.clientX - canvasOffsetX, e.clientY-canvasOffsetY);
    i++;
    


}







ctx.beginPath();
ctx.moveTo(30, 30);
ctx.bezierCurveTo(120,160, 180,10, 220,140);
ctx.stroke();




  

canvas.addEventListener('mousemove', draw);
