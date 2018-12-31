window.onload = function(){
	init();
}

function init(){
	gallery_pics = ['pic1.png','pic2.png','pic3.png','pic4.png','pic5.png'];
	currentValue = 0;
	setPic(0);
}

function setPic(currentValue) {
	document.getElementById('canvas').src = "img/"+gallery_pics[currentValue];
	document.getElementById('canvas').style.width = "100%";
	document.getElementById('canvas').style.height = "100%";
}

function previous(){
	if(currentValue==0) {
		currentValue = gallery_pics.length+1;
		setPic(--currentValue);
	}
	setPic(--currentValue);
}

function next(){
	if(currentValue==gallery_pics.length-1) {
		currentValue = -1;
	}
	setPic(++currentValue);
}