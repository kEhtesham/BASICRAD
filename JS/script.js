// megamenu 

function megaMenu(evt, megaMenu) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(megaMenu).style.display = "flex";
    evt.currentTarget.className += " active";
}

function activeMegaMenu(className, elementName, elementListClassName){
    var selectedClassElements = document.getElementsByClassName(className);
    for(var i = 0; i<selectedClassElements[0].children.length ; i++) {
        selectedClassElements[0].children[i].classList.remove('active');
    }
    selectedClassElements[0].children[0].classList.add('active');
    var selectedElementList = document.getElementsByClassName(elementListClassName);
    for(var i = 0; i<selectedElementList.length ; i++) {
        selectedElementList[i].style.display = "none";
    }
    document.getElementById(elementName).style.display = "flex";
}

// accordion 

function loadJsFunction() {
    accordionFunction();
    accordionFunctionrun();
}

// Dropdown accordion 

var dropdownAccordion = document.getElementsByClassName("dropdown_acc_head");
var i;

for (i = 0; i < dropdownAccordion.length; i++) {
    dropdownAccordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var newPanel = this.nextElementSibling;
    if (newPanel.style.display === "none") {
        newPanel.style.display = "block";
    }
    else {
        newPanel.style.display = "none";
    }
    });
}

// dropdown functions 

function clearFilterFunction(event, className) {
    var accordionFilterClear = document.querySelectorAll('.' + className + '  .acc_filtr_check');
    for (i = 0; i < accordionFilterClear.length; i++) {
        accordionFilterClear[i].checked = false;
    }
}
function collapsFilterFunction(event, className) {
    var accordionFilterCollaps = document.querySelectorAll('.' + className + '  .dropdown_acc_content');
    for (i = 0; i < accordionFilterCollaps.length; i++) {
        accordionFilterCollaps[i].style.display = "none";
    }
}
function expandFilterFunction(event, className) {
    var accordionFilterBlock = document.querySelectorAll('.' + className + '  .dropdown_acc_content');
    for (i = 0; i < accordionFilterBlock.length; i++) {
        accordionFilterBlock[i].style.display = "block";
    }
}


// filter append

function filterPushFunction(filterId) {
    // console.log('filterId', filterId);
    var filterAdded = document.getElementById(filterId);
    var allFilterListing = document.getElementsByClassName('all_filter_listing');
    if (filterAdded.checked == true) {
        var inputLoop = document.getElementById(filterId).step;
        
            var filterElement = document.createElement("div");
                filterElement.setAttribute('class','filter_elem '+filterId+'-chk');
            var filterOptions = document.createElement("div");
                filterOptions.setAttribute('class','filtr_options');

            var elementContent = document.getElementById(filterId).value;
                filterOptions.appendChild(document.createTextNode(elementContent));

                filterElement.appendChild(filterOptions);
            var totalFilter = document.createElement("div");
                totalFilter.setAttribute('class','total_filter');
                totalFilter.appendChild(document.createTextNode('(All)'));
                filterOptions.appendChild(totalFilter);
            var caretDown = document.createElement("i");
                caretDown.setAttribute('class','fas fa-caret-down');
                filterOptions.appendChild(caretDown);
            var filterationOptions = document.createElement("div");
                filterationOptions.setAttribute('class','filteration_options');
            filterElement.appendChild(filterationOptions);

            if (filterAdded.classList.contains('dropdown_push')){
                    
                // filterationOptions

                    var selectAllFilter = document.createElement("div");
                    selectAllFilter.appendChild(document.createTextNode('Select All'));
                    selectAllFilter.setAttribute('class','select_all');

                    filterationOptions.appendChild(selectAllFilter);

                    var selectNoneFilter = document.createElement("div");
                    selectNoneFilter.appendChild(document.createTextNode('Select None'));
                    selectNoneFilter.setAttribute('class','select_none');

                    filterationOptions.appendChild(selectNoneFilter);
                
                    var innerFilterWrap = document.createElement("div");
                    innerFilterWrap.setAttribute('class','filtr_wrap');
            
                    filterationOptions.appendChild(innerFilterWrap);

                    for (k=0; k<inputLoop; k++) {
                        var filterWrapParent = document.createElement("div");
                        filterWrapParent.setAttribute('class','filtr_element_wrap');

                        innerFilterWrap.appendChild(filterWrapParent);

                        var inputInnerFilter = document.createElement("input");
                        
                        var elementArray = ["Maxim", "AVX", "Yageo"];
                        inputInnerFilter.setAttribute('type','checkbox');
                        inputInnerFilter.setAttribute('id', 'id'+ k);
                        filterWrapParent.appendChild(inputInnerFilter);

                        var labelInnerFilter = document.createElement("label");
                        labelInnerFilter.setAttribute('for','id'+k);
                        labelInnerFilter.innerHTML=elementArray[k];
                        filterWrapParent.appendChild(labelInnerFilter);
                    }

                allFilterListing[0].appendChild(filterElement);
            }
            else {
                    var rangeInnerFilter = document.createElement("div");
                    var newRangeID = 'slider-range-' + filterId;
                    rangeInnerFilter.setAttribute('id', newRangeID);
                    filterationOptions.appendChild(rangeInnerFilter);
                    
                    var firstRangeValue = document.createElement("input");
                    firstRangeValue.setAttribute('type', 'text');
                    var newInputID = 'amount-' + filterId;
                    firstRangeValue.setAttribute('id', newInputID);
                    filterationOptions.appendChild(firstRangeValue);

                filterElement.appendChild(filterationOptions);
            allFilterListing[0].appendChild(filterElement);
            }
    }
    else {
        var removeFilter = document.getElementsByClassName(filterId+"-chk");
        removeFilter[0].remove();
    }
}


function getRangeFunction(functionId) {
    var getRangeValue = document.getElementById(functionId).value;
    var inputFirstNextSibling = document.getElementById(functionId).nextSibling;
    var inputFirstValue = inputFirstNextSibling.nextSibling;
    inputFirstValue.value=getRangeValue;
}

function getLastRangeFunction(lastRangeId) {
    var getLastRangeValue = document.getElementById(lastRangeId).value;
    var inputLastNextSibling = document.getElementById(lastRangeId).nextSibling;
    var inputLastValue = inputLastNextSibling.nextSibling;
    inputLastValue.value = getLastRangeValue;
}

function getInputFunction(inputId) {
    var getInputValue = document.getElementById(inputId).value;
    var pushPriviousValue = document.getElementById(inputId).previousSibling;
    var priviousInputValue = pushPriviousValue.previousSibling;
    priviousInputValue.value = getInputValue;
}



// Dynamic Menu

// function DynamaticMenu() {
//     const mainInputElement = document.querySelector('#all_devices_menu1');
//     for (i = 0; i< 2; i++) {
//         var menuWrap = document.createElement("div");
//         menuWrap    .setAttribute('class','menu_wrap');
//         mainInputElement.appendChild(menuWrap);
//         var menuUl = document.createElement('ul');
//         // menuWrap.appendChild(menuUl);    
//         menuWrap.appendChild(menuUl);
//     }
//     // console.log(mainInputElement);
// }


function accordionFunction() {
    var accordionElement1 = document.getElementById('accordion_elem_first');
    var accordionElement2 = document.getElementById('accordion_elem_second');
    var accordionElement3 = document.getElementById('accordion_elem_third');
    var accordionElement = [accordionElement3, accordionElement2, accordionElement1];    

        for (a=0; a< accordionElement.length; a++) {
            var accHeading = document.createElement('div');
            accHeading.setAttribute('class', 'acc_heading active');
            accordionElement[a].appendChild(accHeading);       

                // accordion heading
                var accHead = document.createElement('div');
                accHead.setAttribute('class', 'acc_head acc_head_top');
                accHeading.appendChild(accHead);

                    var downArrow = document.createElement('i');
                    downArrow.setAttribute('class', 'fas fa-chevron-down');
                    accHead.appendChild(downArrow);

                    var acordionContentwrap = document.createElement('div');
                    acordionContentwrap.setAttribute('class', 'acc_content_head_wrap');
                    accHead.appendChild(acordionContentwrap);
                    acordionContentwrap.appendChild(document.createTextNode('MAX3453EEUD'));

                        var acordionContentinnerwrap = document.createElement('span');
                        acordionContentwrap.appendChild(acordionContentinnerwrap);
                        acordionContentinnerwrap.appendChild(document.createTextNode('| ' + 'SKU:XXXXXXXXX'));

                    var acordionRadiationinfo = document.createElement('div');
                    acordionRadiationinfo.setAttribute('class', 'radiation_test_detail');
                    accHead.appendChild(acordionRadiationinfo);
                    acordionRadiationinfo.appendChild(document.createTextNode('(' + '3 ' + 'Radiation Tests)'));

                // accordion sub heading content
                var accsubHead = document.createElement('div');
                accsubHead.setAttribute('class', 'acc_head acc_head_bottom');
                accHeading.appendChild(accsubHead);
                    
                    var accRating = document.createElement('div');
                    accRating.setAttribute('class', 'ratings');
                    accsubHead.appendChild(accRating);
                    var star = parseInt(Math.random() * (5 - 0) + 0);
                        for (r=0; r<5; r++) {
                            var accRatingelem = document.createElement('i');
                            if(r <= star){
                                accRatingelem.setAttribute('class', 'fas fa-star active');
                            } else {
                                accRatingelem.setAttribute('class', 'fas fa-star');
                            }
                            accRating.appendChild(accRatingelem);
                        }
                    
                    var reviewCount = document.createElement('div');
                    reviewCount.setAttribute('class', 'no_of_reviews more_review_info');
                    reviewCount.appendChild(document.createTextNode('(' + '30' + 'Rad Reviews)'));
                    accsubHead.appendChild(reviewCount);

                    var latestView = document.createElement('div');
                    latestView.setAttribute('class', 'latest_viewed more_review_info');
                    latestView.appendChild(document.createTextNode('View on ' + 'octopart'));
                    accsubHead.appendChild(latestView);

            //accordion Content
            var accContent = document.createElement('div');
            accContent.setAttribute('class', 'acc_content');
            accContent.setAttribute('style', 'display:block');
            accordionElement[a].appendChild(accContent);
            

            var rowinnerContentclass= ['part_number', 'SKU', 'device_type', 'manufacturer updated', 'rev', 'rev_date', 'lot_code', 'capacitance updated', 'rated_voltage updated', 'positive_tolerance updated', 'negative_tolerance updated', 'radiation_test updated', 'test_category updated', 'source updated', 'test_date updated', 'test_details updated', 'result updated', 'documents updated', 'facilities updated'];
            var rowinnerContentdata= ['MAX3453EEUD', 'SKU-02', 'Capacity Array', 'Maxim', '1.0', '7/7/2000', 'XXXX', '10 nF', '50 V', '10%', '10%', 'Single Event Latch-up', 'Single Event Upset', 'NASA', '7/12/2006', '22k rads', 'PASS', 'Radiation Test']
            for (i=0; i< 2; i++) {
                var rowContent = document.createElement('div');
                rowContent.setAttribute('class', 'row_content');
                accContent.appendChild(rowContent);
                for (k=0; k< rowinnerContentclass.length; k++) {
                    var rowinnerContent= document.createElement('div');
                    rowinnerContent.setAttribute('class', rowinnerContentclass[k]);
                    rowinnerContent.appendChild(document.createTextNode(rowinnerContentdata[k]));
                    rowContent.appendChild(rowinnerContent);
                }
            }

            //fixing accordion element
            var accHeadingfix = document.createElement('div');
            accHeadingfix.setAttribute('class', 'acc_heading_fix');
            accordionElement[a].appendChild(accHeadingfix);
        }
}


function accordionFunctionrun() {
    var accordionComps = document.getElementsByClassName("acc_heading");
    var k;
    
    for (k = 0; k < accordionComps.length; k++) {
        accordionComps[k].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
        });
    }
}





// Two sided range slider

$(document).ready(function(){
    $('.range_slider_push').click(function(){
        var sliderRange = $(this).attr('id');
        setTimeout(function(){
            $( "#slider-range-" + sliderRange ).slider({
                range: true,
                min: 0,
                max: 500,
                values: [ 75, 300 ],
                slide: function( event, ui ) {
                    $( "#amount-" + sliderRange ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                }
            });
            $( "#amount-" + sliderRange ).val( "$" + $( "#slider-range-" + sliderRange ).slider( "values", 0 ) +
            " - $" + $( "#slider-range-" + sliderRange).slider( "values", 1 ) );
            console.log( "#slider-range-" + sliderRange );
        }, 3000);
    });    
});