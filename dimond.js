class Dimond{
	constructor(x,y,r)
	{
	var options={
		'restitution':0.3,
		'friction':1,
		'density':1,
	}
		
		
		this.body=Bodies.circle(x, y, r-20/2, options);
		this.r=r;
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;
			var angle = this.body.angle;		
			push()
			translate(pos.x,pos.y);
			rotate(angle);
			angleMode(RADIANS);
			strokeWeight(4);
			stroke("black");
			fill("brown");
			//draw the ellipse here to display the rubber ball
			ellipseMode(CENTER);
			ellipse(0,0,this.r,this.r);
			pop()
	}

}