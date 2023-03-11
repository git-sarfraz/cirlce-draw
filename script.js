var animationDuration = 750;

var path = document.querySelector('.path'),
	pathLength = path.getTotalLength(),
	drawButton = document.querySelector('.draw'),
	resetButton = document.querySelector('.reset'),
	percentageInput = document.querySelector('.percentage'),
	percentageTextNumber = document.querySelector('.percentage-number');

path.style.transition='stroke-dashoffset ' + animationDuration + 'ms';

function reset() {
	path.setAttribute('stroke-dasharray', pathLength);
	path.setAttribute('stroke-dashoffset', pathLength);
	percentageTextNumber.textContent = '0';
}
reset();

function animateValue(elem, start, end, duration) {
    var range = end - start,
		current = start,
		increment = end > start ? 1 : -1,
		stepTime = Math.abs(Math.floor(duration / range)),
		timer = setInterval(function() {
			if (range !== 0) {
				current += increment;
        		elem.textContent = current;
			}
        	if (current === end) {
            	clearInterval(timer);
        	}
    	}, stepTime);
}

function draw() {
	var percentageValue = Number(percentageInput.value),
		percentage = percentageValue * .01,
		percentOfPath = pathLength - (percentage * pathLength);
	
	path.setAttribute('stroke-dashoffset', percentOfPath);
	
	animateValue(percentageTextNumber, Number(percentageTextNumber.textContent), percentageValue, animationDuration);
	
	//percentageTextNumber.textContent = percentageValue;
}

resetButton.addEventListener('click', reset, false);
drawButton.addEventListener('click', draw, false);