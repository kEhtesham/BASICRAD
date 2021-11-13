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