window.onload = function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');

    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 4; 

    for(var x=0; x<1200; x=x+150){

        ctx.moveTo(x,0);
        ctx.lineTo(x,1200);
        ctx.stroke();

    }
    for(var y=0; y<600; y=y+75){
        
        ctx.moveTo(0,y);
        ctx.lineTo(600,y);
        ctx.stroke();
    }

}


/*var myAreaWidth = width = 150;

var myAreaHeight = height = 75;

    for(var i=0; myAreaWidth<=8; i++){
        var lineX = myAreaWidth[i];
}

    for(var i=0; myAreaHeight<=8; i++){
        var lineY = myAreaHeight[i];
}



}*/
