// VARIABLES

var Player;

function startGame() {
    myGameArea.start();
    myGameArea.grid();
    Player = new Player(30, 30, "red", 10, 120);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1200;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");            
        })
    }, 
    grid : function(){
        this.context = this.canvas.getContext('2d');
        
        this.context.strokeStyle = "#000000";
        this.context.lineWidth = 1; 

        for(var x=0; x<1201; x=x+150){

            this.context.moveTo(x,0);
            this.context.lineTo(x,600);
            this.context.stroke();

        }
        for(var y=0; y<601; y=y+75){
            
            this.context.moveTo(0,y);
            this.context.lineTo(1200,y);
            this.context.stroke();
        }
    },
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function Player(width, height, color, x, y) {
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
}

function updateGameArea() {
    myGameArea.clear();
    myGameArea.grid();
    Player.speedX = 0;
    Player.speedY = 0;    
    if (myGameArea.keys && myGameArea.keys[37]) {Player.speedX = -2; }
    if (myGameArea.keys && myGameArea.keys[39]) {Player.speedX = 2; }
    if (myGameArea.keys && myGameArea.keys[38]) {Player.speedY = -2; }
    if (myGameArea.keys && myGameArea.keys[40]) {Player.speedY = 2; }
    Player.newPos();    
    Player.update();
}

startGame();

/*var myArea = {
    draw: function(){
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext('2d');
        
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 1; 

        for(var x=0; x<1201; x=x+150){

            ctx.moveTo(x,0);
            ctx.lineTo(x,600);
            ctx.stroke();

        }
        for(var y=0; y<601; y=y+75){
            
            ctx.moveTo(0,y);
            ctx.lineTo(1200,y);
            ctx.stroke();
        }
    },
    clear: function(){
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,canvas.width, canvas.height);
    },
};

// FUNCIONES CONSTRUCTORAS

function Player(x,y,width,height,color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.SpeedX = 0;
    this.SpeedY = 0;    
    

    this.draw = function() {
        var ctx = document.getElementById("canvas").getContext('2d')
        var imageObj = new Image();
        imageObj.src = 'https://www.topsimages.com/thumbs/Fr3s0en6QJQ6zv5V3FXtvs63-5K_dq646pORpPDQNMwS7qX0ihPWI-cuYfOCpXbMH4vwIdyHmx1yPRsOL6Kz-Q.jpgs';

        imageObj.onload = function(){
            ctx.drawImage(imageObj, 69, 50);
        }     
        /*var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext('2d');
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height)
            }
    this.cart = [];

    this.moveTop = function(){
        this.SpeedY -= 1
    }

    this.moveBottom = function(){
        this.SpeedY += 1
    }

    this.moveRight = function(){
        this.SpeedX += 1
    }

    this.moveLeft = function(){
        this.SpeedX -= 1
    }

}
}


// FUNCIONES COMPLEMENTARIAS

var player1 = new Player(5,5,50,50,'red')

// function update() {

// }

function start() {
    player1.draw()
}

start()





// LISTENERS


window.onload = function(){
    myArea.clear();
    myArea.draw();
    // player1.draw();
    // player1.clear();
    
}


document.onkeydown = function(){
    switch (e.keyCode){
        case 38:
        moveUp();
        break;
        case 40:
        moveDown();
        break;
        case 37:
        moveRight();
        break;
        case 39:
        moverLeft();
        break;
    }
}
*/