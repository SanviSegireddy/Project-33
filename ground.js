class Ground{

    constructor(x,y,w,h){
        var ground_options = {
            isStatic : true
          }
        
          this.body = Bodies.rectangle(450,390,900,20,ground_options);
          
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        rectMode(CENTER);
        fill("red");
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
    }

