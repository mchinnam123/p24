class PlayerArcher
{
    constructor(x,y,width,height)
    {
        const options={
            isStatic:true
        };

        this.body = Matter.Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //this.collapse = false;
        this.image = loadImage("./assets/playerArcher.png");

        World.add(world,this.body);
        Matter.Body.setAngle(this.body,PI/2); //-90 degree
    
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        
        if(move==="UP" && computerArcher.body.angle < 1.77)
        {
            angleValue = 0.1;
        }else{
            angleValue = -0.1
        }

        if(move==="DOWN" && computerArcher.body.angle > 1.47)
        {
            angleValue = -0.1;
        }else{
            angleValue = 0.1;
        }

       
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        imageMode (CENTER);
        image (this.body,0,0,this.width,this.height);
        pop ();

    }
}
   