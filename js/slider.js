function autoSlider(listId) {
	function autoSlideRight() {
		slide(-100, listId, true);
	};

	setInterval(autoSlideRight, 5000);
}

function slide(step, listId, loop = false) {
    var sliderList = document.getElementById(listId),
        elementsCount = sliderList.getElementsByTagName("li").length,
        newMargin = parseInt(sliderList.style.marginLeft) + step;

    if (newMargin <= 0 && newMargin >= -(elementsCount - 1) * 100) {
        sliderList.style.marginLeft = newMargin + '%';
    }
    else if (loop) {
    	sliderList.style.marginLeft = 0;
    }     	
}

function slideLeft(listId) {
    slide(100, listId);
}

function slideRight(listId) {
    slide(-100, listId);
}
