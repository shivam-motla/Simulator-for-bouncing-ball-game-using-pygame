
    // disableButton: function(buttonId) {
    //     document.getElementById(buttonId).disabled = true
    // },
    // enableButton: function(buttonId) {
    //     document.getElementById(buttonId).disabled = false
    // },
    // changeClass: function(id, className) {
    //     document.getElementById(id).className = className
    // },
    // addClickEvent: function(id, method) {
    //     var element = document.getElementById(id)
    //     element.addEventListener('click', method, false)
    // },

function changeClass(id, className) {
    document.getElementById(id).className = className
}
///////////////////////////////
var canvas = document.querySelector("canvas"); 

var canvas_width=600;
var canvas_height=400;
var isStop=0;
canvas.width = canvas_width; 
canvas.height = canvas_height;

var rID;


// canvas.width = window.innerWidth; 
// canvas.height = window.innerHeight;
//canvasObject.setAttribute('width', '475'); 

var l = canvas.getContext('2d'); 

// x and y are the co-ordinates of the circle 

// vx and vy are the respective speeds

var radius;
var x,y,speed_xy,vx,vy;



// Math.random() generates a random number upto to the number
// multiplied to it (basically random() generates a 
// random number 0 to 1)

var img = new Image();
var imgbg=new Image();


function clickNext(){
    changeClass('selection_div','hide');
    changeClass('para_div','show');
}

function clickStart(){
changeClass('code_div','hide');
changeClass('resultDisplay','resultDisplay show');
radius = Number(document.getElementById('size__').value);
x = radius; 
y = 200; 
speed_xy=Number(document.getElementById('speed__').value);

if (document.getElementById('direction__').value=="1") {
    vx = (0*speed_xy); ///
    vy = (0.731*speed_xy); 
}
else if (document.getElementById('direction__').value=="2") {
    vx = 0.366*speed_xy; 
    vy = 0.633*speed_xy; 
}
else if (document.getElementById('direction__').value=="3") {
    vx = 0.633*speed_xy; 
    vy = 0.366*speed_xy; 
}
else if (document.getElementById('direction__').value=="4") {
    vx = 0.731*speed_xy; //////
    vy = 0*speed_xy; 
}
else if (document.getElementById('direction__').value=="5") {
    vx = -0.633*speed_xy; 
    vy = -0.366*speed_xy; 
}
else if (document.getElementById('direction__').value=="6") {
    vx = -0.366*speed_xy; 
    vy = -0.633*speed_xy; 
}
else{
    vx = 0*speed_xy; //
    vy = -.731*speed_xy; 
}
cancelAnimationFrame(rID);
move();
}

 
// This function will do the animation 
function move() { 

    rID=requestAnimationFrame(move); 

    // It clears the specified pixels within  
    // the given rectangle 
    l.clearRect(0, 0, canvas_width, canvas_height); 

if(document.getElementsByName('bg__')[0].checked)
    imgbg.src = 'bg04.jpg';
else if(document.getElementsByName('bg__')[1].checked)
    imgbg.src = 'bg01.png';
else if(document.getElementsByName('bg__')[2].checked)
    imgbg.src = 'bg02.jpg';
else
    imgbg.src = 'bg03.jpg';

l.drawImage(imgbg,0,0,600,400);


//checked image
if(document.getElementsByName('ball__')[0].checked)
    img.src = 'vollyball.png';
else if(document.getElementsByName('ball__')[1].checked)
    img.src='football.png';
else if(document.getElementsByName('ball__')[2].checked)
    img.src='basketball.png';
else
    img.src='baseball.png';


l.drawImage(img,x-radius,y-radius,2*radius,2*radius);

    // Conditions so that the ball bounces  
    // from the edges 
    if (radius + x > canvas_width || x - radius < 0) 
        vx = 0 - vx; 

    if (y + radius > canvas_height || y - radius < 0) 
        vy = 0 - vy; 

    x = x + vx; 
    y = y + vy; 

} 