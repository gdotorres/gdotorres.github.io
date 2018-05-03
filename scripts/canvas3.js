var canvas = document.getElementById('exemplo3');
var returnRAF;

if (canvas.getContext){

	var context = canvas.getContext('2d');

	canvas.height = 350;
	canvas.width = 450;

	var diamond = {
		x: 100,
		y: 100,
		vx: 5,
		vy: 5,
		size: 50,
		draw: function(){
			context.beginPath();
			context.moveTo(this.x,this.y);
			context.lineTo(this.x+this.size,this.y+this.size);
			context.lineTo(this.x,this.y+this.size*2);
			context.lineTo(this.x-this.size,this.y+this.size)		
			context.closePath();
			context.stroke();
		} 
	}	

	function animate(){
		context.clearRect(0,0,canvas.width,canvas.height);
		returnRAF = requestAnimationFrame(animate);

		diamond.draw();
	}

	diamond.draw();
}

canvas.addEventListener('mouseover', function(e){
	returnRAF = requestAnimationFrame(animate);
});

canvas.addEventListener('mouseout', function(e){
	cancelAnimationFrame(returnRAF);	
});

canvas.addEventListener('mousemove', function(e) {
	context.clearRect(0,0,canvas.width,canvas.height);
	diamond.x = e.clientX;
	diamond.y = e.clientY;
	diamond.draw();
});