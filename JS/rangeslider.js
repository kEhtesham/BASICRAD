$(document).ready(function(){
    $('.range_slider_push').click(function(){
        let sliderRange = $(this).attr('id');
        setTimeout(function(){
            $( "#slider-range-" + sliderRange ).slider({
                range: true,
                min: 10,
                max: 22,
                values: [ 10, 22 ],
                slide: function( event, ui ) {
                    $( "#first-" + sliderRange ).val( ui.values[ 0 ]);
                    $( "#last-" + sliderRange ).val( ui.values[ 1 ] );
                }
            });

            $( "#first-" + sliderRange ).val( $( "#slider-range-" + sliderRange ).slider( "values", 0 ) );
            $( "#last-" + sliderRange ).val( $( "#slider-range-" + sliderRange).slider( "values", 1 ) );

            var min = ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'];
            $("#first-" + sliderRange).on('change', function() {
                for(k=0; k<min.length; k++) {                    
                    if (this.value==min[k]) {
                        $('.ui-state-default:nth-child(3)').css('left', k*8.33333 + '%');
                        
                        let leftValue= $('.ui-state-default:nth-child(3)').css('left');
                        let rightValue= $('.ui-state-default:last-child').css('left');
                        let widthValue= rightValue - leftValue + '%';

                        $('.ui-slider-range').css( {'left' : leftValue , 'width' : widthValue } );
                    }
                }
            });

            $("#last-" + sliderRange).on('change', function() {
                for(k=0; k<min.length; k++) {

                    if (this.value==min[k]) {

                        let leftValue= $('.ui-state-default:nth-child(3)').css('left');
                        let rightValue= $('.ui-state-default:last-child').css('left');
                        let widthValue= leftValue - rightValue + '%';
                        $('.ui-state-default:last-child').css('left', k*8.33333 + '%');
                        $('.ui-slider-range').css( { 'left' : leftValue, 'width' : widthValue } );
                    }
                }
            });

        }, 1000);
    });    
});



// inner page range slider

window.addEventListener('DOMContentLoaded', () => {
	new dualRangeSlider(document.querySelector(".dual-range"));
	var rightRangeValueLoad = document.querySelector('.handle.right');
	if (rightRangeValueLoad.attributes[1].value > 19){
		rightRangeValueLoad.style.fontSize = "0";		
	}
	else {
		rightRangeValueLoad.style.fontSize = "14px";
	}
})


class dualRangeSlider {
	constructor(rangeElement) {
		this.range = rangeElement
		this.min = Number(rangeElement.dataset.min)
		this.max = Number(rangeElement.dataset.max)
		this.handles = [...this.range.querySelectorAll(".handle")]
		this.startPos = 0;
		this.activeHandle;
		
		this.handles.forEach(handle => {
			handle.addEventListener("mousedown", this.startMove.bind(this))
			handle.addEventListener("touchstart", this.startMoveTouch.bind(this))
		})
		
		window.addEventListener("mouseup", this.stopMove.bind(this))
		window.addEventListener("touchend", this.stopMove.bind(this))
		window.addEventListener("touchcancel", this.stopMove.bind(this))
		window.addEventListener("touchleave", this.stopMove.bind(this))
		
		const rangeRect = this.range.getBoundingClientRect();
		const handleRect = this.handles[0].getBoundingClientRect()
		this.range.style.setProperty("--x-1", "0px");
		this.range.style.setProperty("--x-2", rangeRect.width - handleRect.width/2 + "px");
		this.handles[0].dataset.value = this.range.dataset.min;
		this.handles[1].dataset.value = this.range.dataset.max;
	}
	
	startMoveTouch(e) {
		const handleRect = e.target.getBoundingClientRect()
		this.startPos = e.touches[0].clientX - handleRect.x;
		this.activeHandle = e.target;
		this.moveTouchListener = this.moveTouch.bind(this)
		window.addEventListener("touchmove", this.moveTouchListener);
	}
	
	startMove(e) {
		this.startPos = e.offsetX;
		this.activeHandle = e.target;
		this.moveListener = this.move.bind(this)
		window.addEventListener("mousemove", this.moveListener);
	}
	
	moveTouch(e) {
		this.move({clientX: e.touches[0].clientX})
	}
	
	move(e) {
		const isLeft = this.activeHandle.classList.contains("left")
		const property = isLeft ? "--x-1" : "--x-2";
		const parentRect = this.range.getBoundingClientRect();
		const handleRect = this.activeHandle.getBoundingClientRect();
		let newX = e.clientX - parentRect.x - this.startPos;
		if(isLeft) {
			const otherX = parseInt(this.range.style.getPropertyValue("--x-2"));
			newX = Math.min(newX, otherX - handleRect.width)
			newX = Math.max(newX, 0 - handleRect.width/2)
		} else {
			const otherX = parseInt(this.range.style.getPropertyValue("--x-1"));
			newX = Math.max(newX, otherX + handleRect.width)
			newX = Math.min(newX, parentRect.width - handleRect.width/2)
			var rightRangeValue = document.querySelector('.handle.right');
			if (rightRangeValue.attributes[1].value > 19){
				rightRangeValue.style.fontSize = "0";
			}
			else {
				rightRangeValue.style.fontSize = "14px";
			}
		}
		this.activeHandle.dataset.value = this.calcHandleValue((newX + handleRect.width/2) / parentRect.width)
		this.range.style.setProperty(property, newX + "px");
	}
	
	calcHandleValue(percentage) {
		return Math.round(percentage * (this.max - this.min) + this.min)
	}
	
	stopMove() {
		window.removeEventListener("mousemove", this.moveListener);
		window.removeEventListener("touchmove", this.moveTouchListener);
	}
}