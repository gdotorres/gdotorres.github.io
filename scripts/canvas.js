var canvas = document.getElementById('exemplo');

if (canvas.getContext){

	var context = canvas.getContext('2d');

	canvas.height = 350;
	canvas.width = 350;

	var circle = {
		x: 100,
		y: 100,
		radius: 50,
		vx: 5,
		vy: 5,
		draw: function(){
			context.beginPath();
			context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);		
			context.closePath();
			context.fillStyle = "#AB9723";
			context.fill();
		} 
	}	

	circle.draw();
}

window.addEventListener('keydown', function(e) {
	context.clearRect(0,0,canvas.width,canvas.height);

	if(e.keyCode == 38){
		if(circle.y - circle.radius > 0){
			circle.y -= 10;
		}
	}
	if(e.keyCode == 40){
		if(circle.y + circle.radius < canvas.height){
			circle.y += 10;
		}
	}
	if(e.keyCode == 37){
		if(circle.x - circle.radius > 0){
			circle.x -= 10;
		}
	}
	if(e.keyCode == 39){
		if(circle.x + circle.radius < canvas.width){
			circle.x += 10;
		}
	}

	circle.draw();


}, true);