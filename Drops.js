class Drop {

    constructor(x, y, width, height) {
       
        var options={
         restitution: 0.1,
         friction: 0.1,
      };
      this.rain = Bodies.circle(x, y, 5, options);
      this.width = width;
      this.height = height;
      World.add(world,this.rain);
    }
    display(){
      var pos = this.body.position;
      fill("blue");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
     update(){

       if(this.rain.position.y>height){
          console.log(this.body.position.y);
          Matter.Body.setPosition (this.rain,{x: random(0,400),y: random(0,400)})
          };
        
        var maxDrops=100;
        for(var i=0; i<maxDrops; i++){
            Drops.push(new createDrop(random(0,400),random(0,400)));
        }
     }
  }