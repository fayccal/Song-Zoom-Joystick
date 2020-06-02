let canvas= document.querySelector("canvas");
let ctx= canvas.getContext("2d");

const load =()=>
{ctx.beginPath();
    ctx.arc(500,300,150,0,2*Math.PI);
    ctx.arc(500,300,175,0,2*Math.PI);
    ctx.stroke();}

let center={
    x:500,
    y:300,
    ray:50,
    Xmax:675,
    Xmin:325,
    Ymax:475,
    Ymin:125,
    velo:0,
    base:0,
        draw: function(){
        ctx.beginPath();
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.fillStyle = "#000000";
        let joy=ctx.arc(this.x,this.y,this.ray,0,2*Math.PI);
        ctx.fill();
        load();
        ctx.font='20px Arial';
        ctx.fillText('Pos x:'+ this.x,100,50);
        ctx.fillText('Pos y:'+this.y,100,70);
        ctx.fillText("Velocity ="+this.velo,100,100);
        ctx.stroke();
        }
};

canvas.addEventListener('mousedown',()=>{

    canvas.addEventListener('mousemove',(e)=>{

        
          if(e.clientX >= center.Xmin + center.ray && e.clientX <= center.Xmax - center.ray && e.clientY >= center.Ymin + center.ray && e.clientY<= center.Ymax - center.ray)
          {
        center.x=e.clientX;
        center.y=e.clientY;
        center.base = 500 + 300;
        
        center.velo=(center.base -(center.x+center.y)) / 175;
        if(center.velo < 0)
        {
            center.velo *=-1;
        }
        
        center.draw();
          }

    });
});
center.draw();

/*
    if(center.x <=500 && center.y >= 300)
    {
  
       
    }
    if(center.x >=500 && center.y <= 300)
    {

    }

*/