let canvas= document.querySelector("canvas");
let ctx= canvas.getContext("2d");


let img= new Image();
const load =()=>
{ctx.drawImage(img,0,0);}
img.addEventListener('load', function() {
    
    ctx.drawImage(img,0,0);
  }, false);
img.src='plage.png';

canvas.width=img.width;
canvas.height=img.height;

let zone ={
    x:100,
    y:100,
    
    draw: function() {
        ctx.beginPath();
        ctx.clearRect(0,0, canvas.width, canvas.height);
        load();
        ctx.strokeRect(this.x,this.y,150,150);
        ctx.drawImage(img,this.x,this.y,150/2,150/2,this.x,this.y,150,150);
        ctx.closePath();
    }
};

canvas.addEventListener('mousemove',(e)=>{
   
    zone.x=e.clientX;
    zone.y=e.clientY;
    zone.draw();    
    
});

zone.draw();

