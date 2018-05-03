var canvas = document.getElementById('exemplo2');
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

		diamond.x += diamond.vx;
		diamond.y += diamond.vy;

		if(diamond.y + diamond.size*2 > canvas.height || diamond.y < 0){
			diamond.vy = -diamond.vy;
		}

		if(diamond.x + diamond.size > canvas.width || diamond.x - diamond.size < 0){
			diamond.vx = -diamond.vx;
		}
	}

	diamond.draw();
}

canvas.addEventListener('mouseover', function(e){
	returnRAF = requestAnimationFrame(animate);
});

canvas.addEventListener('mouseout', function(e){
	cancelAnimationFrame(returnRAF);	
});