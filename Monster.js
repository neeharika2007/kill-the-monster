class Monster {
	constructor(x, y, r){
		var options = {
			density : 5,
			frictionAir : 0
		};
		this.x = x;
		this.y = y;
		this.r = r;
		this.image = loadImage("Monster1.png");
		this.body = Bodies.circle(this.x, this.y, (this.r)/2, optiions);
		World.add(world, this.body);
	}
	display(){
		var santaPos = this.body.position;
		push();
		translate(santaPos.x, santaPos.y - 100);
		rectMode(CENTER);
		fill(255, 0, 255);
		imageMode(CENTER);
		this.image(tis.image, 0, this.r, this.r);
		pop();
	}



}
