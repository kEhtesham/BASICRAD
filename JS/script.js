const adDropdownButton = [];

function jsonObjFunction() {
    console.log('tableData-->', tableData);
    // const jsonElme = [];
    tableData.forEach(data => {
        adDropdownButton.push(data.title);
    });
    console.log('adDropdownButton-->', adDropdownButton);
}


// megamenu 

function megaMenu(evt, megaMenu) {
    let i;
    const tabContent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    const tabLinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(megaMenu).style.display = "flex";
    evt.currentTarget.className += " active";
}

function activeMegaMenu(className, elementName, elementListClassName){
    const selectedClassElements = document.getElementsByClassName(className);
    for(let i = 0; i<selectedClassElements[0].children.length ; i++) {
        selectedClassElements[0].children[i].classList.remove('active');
    }
    selectedClassElements[0].children[0].classList.add('active');
    let selectedElementList = document.getElementsByClassName(elementListClassName);
    for(let i = 0; i<selectedElementList.length ; i++) {
        selectedElementList[i].style.display = "none";
    }
    document.getElementById(elementName).style.display = "flex";
}

// accordion 

function loadJsFunction() {
    jsonObjFunction();
    accordionFunction();
    accordionFunctionRun();
    allDevicesFunction();
}

// Dropdown accordion 

const dropdownAccordion = document.getElementsByClassName("dropdown_acc_head");
let i;

for (i = 0; i < dropdownAccordion.length; i++) {
    dropdownAccordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let newPanel = this.nextElementSibling;
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
    const accordionFilterClear = document.querySelectorAll('.' + className + '  .acc_filtr_check');
    for (i = 0; i < accordionFilterClear.length; i++) {
        accordionFilterClear[i].checked = false;
    }
}
function collapsFilterFunction(event, className) {
    const accordionFilterCollaps = document.querySelectorAll('.' + className + '  .dropdown_acc_content');
    for (i = 0; i < accordionFilterCollaps.length; i++) {
        accordionFilterCollaps[i].style.display = "none";
    }
}
function expandFilterFunction(event, className) {
    const accordionFilterBlock = document.querySelectorAll('.' + className + '  .dropdown_acc_content');
    for (i = 0; i < accordionFilterBlock.length; i++) {
        accordionFilterBlock[i].style.display = "block";
    }
}


// filter append

function filterPushFunction(filterId) {
    const filterAdded = document.getElementById(filterId);
    const allFilterListing = document.getElementsByClassName('all_filter_listing');
    if (filterAdded.checked == true) {
        const inputLoop = document.getElementById(filterId).step;
        
            const filterElement = document.createElement("div");
                filterElement.setAttribute('class','filter_elem '+filterId+'-chk filter_element_wrap' );
            const filterOptions = document.createElement("div");
                filterOptions.setAttribute('class','filtr_options');

            const elementContent = document.getElementById(filterId).value;
                filterOptions.appendChild(document.createTextNode(elementContent));

                filterElement.appendChild(filterOptions);
            const totalFilter = document.createElement("div");
                totalFilter.setAttribute('class','total_filter');
                totalFilter.appendChild(document.createTextNode('(All)'));
                filterOptions.appendChild(totalFilter);
            const caretDown = document.createElement("i");
                caretDown.setAttribute('class','fas fa-caret-down');
                filterOptions.appendChild(caretDown);
            const filterationOptions = document.createElement("div");
                filterationOptions.setAttribute('class','filteration_options');
            filterElement.appendChild(filterationOptions);

            if (filterAdded.classList.contains('dropdown_push')){
                    
                // filterationOptions

                    const selectAllFilter = document.createElement("div");
                    selectAllFilter.appendChild(document.createTextNode('Select All'));
                    selectAllFilter.setAttribute('class','select_all');

                    filterationOptions.appendChild(selectAllFilter);

                    const selectNoneFilter = document.createElement("div");
                    selectNoneFilter.appendChild(document.createTextNode('Select None'));
                    selectNoneFilter.setAttribute('class','select_none');

                    filterationOptions.appendChild(selectNoneFilter);
                
                    const innerFilterWrap = document.createElement("div");
                    innerFilterWrap.setAttribute('class','filtr_wrap');
            
                    filterationOptions.appendChild(innerFilterWrap);

                    for (k=0; k<inputLoop; k++) {
                        const filterWrapParent = document.createElement("div");
                        filterWrapParent.setAttribute('class','filtr_element_wrap');

                        innerFilterWrap.appendChild(filterWrapParent);

                        const inputInnerFilter = document.createElement("input");
                        
                        const elementArray = ["Maxim", "AVX", "Yageo"];
                        inputInnerFilter.setAttribute('type','checkbox');
                        inputInnerFilter.setAttribute('id', 'id'+ k);
                        filterWrapParent.appendChild(inputInnerFilter);

                        const labelInnerFilter = document.createElement("label");
                        labelInnerFilter.setAttribute('for','id'+k);
                        labelInnerFilter.innerHTML=elementArray[k];
                        filterWrapParent.appendChild(labelInnerFilter);
                    }

                allFilterListing[0].appendChild(filterElement);
            }
            else {
                    const rangeInnerFilter = document.createElement("div");
                    const newRangeID = 'slider-range-' + filterId;
                    rangeInnerFilter.setAttribute('id', newRangeID);
                    filterationOptions.appendChild(rangeInnerFilter);

                    const rangeSliderValue = document.createElement("div");
                    rangeSliderValue.setAttribute('class', 'slider_value');
                    rangeInnerFilter.appendChild(rangeSliderValue);
                    
                    for (i=10; i<=22; i++) {
                        const rangeSliderDiv = document.createElement("div");
                        rangeSliderDiv.appendChild(document.createTextNode(i));
                        rangeSliderValue.appendChild(rangeSliderDiv);
                    }

                    const RangeValueWrap = document.createElement("div");
                    RangeValueWrap.setAttribute('class', 'range_value_wrap');
                    filterationOptions.appendChild(RangeValueWrap);

                    const firstRangeValue = document.createElement("input");
                    firstRangeValue.setAttribute('type', 'text');
                    const newfirstInputID = 'first-' + filterId;                
                    firstRangeValue.setAttribute('id', newfirstInputID);
                    firstRangeValue.setAttribute('min', '10');
                    RangeValueWrap.appendChild(firstRangeValue);

                    const lastRangeValue = document.createElement("input");
                    lastRangeValue.setAttribute('type', 'text');
                    const newlastInputID = 'last-' + filterId;
                    lastRangeValue.setAttribute('max', '22');
                    lastRangeValue.setAttribute('id', newlastInputID);
                    RangeValueWrap.appendChild(lastRangeValue);

                    filterElement.appendChild(filterationOptions);
                    allFilterListing[0].appendChild(filterElement);
            }
    }
    else {
        const removeFilter = document.getElementsByClassName(filterId+"-chk");
        removeFilter[0].remove();
    }
}


function getRangeFunction(functionId) {
    const getRangeValue = document.getElementById(functionId).value;
    const inputFirstNextSibling = document.getElementById(functionId).nextSibling;
    const inputFirstValue = inputFirstNextSibling.nextSibling;
    inputFirstValue.value=getRangeValue;
}

function getLastRangeFunction(lastRangeId) {
    const getLastRangeValue = document.getElementById(lastRangeId).value;
    const inputLastNextSibling = document.getElementById(lastRangeId).nextSibling;
    const inputLastValue = inputLastNextSibling.nextSibling;
    inputLastValue.value = getLastRangeValue;
}

function getInputFunction(inputId) {
    const getInputValue = document.getElementById(inputId).value;
    const pushPriviousValue = document.getElementById(inputId).previousSibling;
    const priviousInputValue = pushPriviousValue.previousSibling;
    priviousInputValue.value = getInputValue;
}


function accordionFunction() {
    const accordionElement1 = document.getElementById('accordion_elem_first');
    const accordionElement2 = document.getElementById('accordion_elem_second');
    const accordionElement3 = document.getElementById('accordion_elem_third');
    const accordionElement = [accordionElement3, accordionElement2, accordionElement1];    

        for (a=0; a< accordionElement.length; a++) {
            const accHeading = document.createElement('div');
            accHeading.setAttribute('class', 'acc_heading active');
            accordionElement[a].appendChild(accHeading);       

                // accordion heading
                const accHead = document.createElement('div');
                accHead.setAttribute('class', 'acc_head acc_head_top');
                accHeading.appendChild(accHead);

                    const downArrow = document.createElement('i');
                    downArrow.setAttribute('class', 'fas fa-chevron-down');
                    accHead.appendChild(downArrow);

                    const acordionContentwrap = document.createElement('div');
                    acordionContentwrap.setAttribute('class', 'acc_content_head_wrap');
                    accHead.appendChild(acordionContentwrap);
                    acordionContentwrap.appendChild(document.createTextNode('MAX3453EEUD'));

                        const acordionContentinnerwrap = document.createElement('span');
                        acordionContentwrap.appendChild(acordionContentinnerwrap);
                        acordionContentinnerwrap.appendChild(document.createTextNode('| ' + 'SKU:XXXXXXXXX'));

                    const acordionRadiationinfo = document.createElement('div');
                    acordionRadiationinfo.setAttribute('class', 'radiation_test_detail');
                    accHead.appendChild(acordionRadiationinfo);
                    acordionRadiationinfo.appendChild(document.createTextNode('(' + '3 ' + 'Radiation Tests)'));

                // accordion sub heading content
                const accSubHead = document.createElement('div');
                accSubHead.setAttribute('class', 'acc_head acc_head_bottom');
                accHeading.appendChild(accSubHead);
                    
                    const accRating = document.createElement('div');
                    accRating.setAttribute('class', 'ratings');
                    accSubHead.appendChild(accRating);
                    const star = parseInt(Math.random() * (5 - 0) + 0);
                        for (r=0; r<5; r++) {
                            const accRatingelem = document.createElement('i');
                            if(r <= star){
                                accRatingelem.setAttribute('class', 'fas fa-star active');
                            } else {
                                accRatingelem.setAttribute('class', 'fas fa-star');
                            }
                            accRating.appendChild(accRatingelem);
                        }
                    
                    const reviewCount = document.createElement('div');
                    reviewCount.setAttribute('class', 'no_of_reviews more_review_info');
                    reviewCount.appendChild(document.createTextNode('(' + '30' + ' Rad Reviews)'));
                    accSubHead.appendChild(reviewCount);

                    const latestView = document.createElement('div');
                    latestView.setAttribute('class', 'latest_viewed more_review_info');
                    latestView.appendChild(document.createTextNode('View on ' + 'octopart'));
                    accSubHead.appendChild(latestView);

            //accordion Content
            const accContent = document.createElement('div');
            accContent.setAttribute('class', 'acc_content');
            accContent.setAttribute('style', 'display:block');
            accordionElement[a].appendChild(accContent);
            

            const rowInnerContentClass= ['part_number', 'SKU', 'device_type', 'manufacturer updated', 'rev', 'rev_date', 'lot_code', 'capacitance updated', 'rated_voltage updated', 'positive_tolerance updated', 'negative_tolerance updated', 'radiation_test updated', 'test_category updated', 'source updated', 'test_date updated', 'test_details updated', 'result updated', 'documents updated', 'facilities updated'];
            const rowInnerContentData= ['MAX3453EEUD', 'SKU-02', 'Capacity Array', 'Maxim', '1.0', '7/7/2000', 'XXXX', '10 nF', '50 V', '10%', '10%', 'Single Event Latch-up', 'Single Event Upset', 'NASA', '7/12/2006', '22k rads', 'PASS', 'Radiation Test']
            for (i=0; i< 2; i++) {
                const rowContent = document.createElement('div');
                rowContent.setAttribute('class', 'row_content');
                accContent.appendChild(rowContent);
                for (k=0; k< rowInnerContentClass.length; k++) {
                    const rowInnerContent= document.createElement('div');
                    rowInnerContent.setAttribute('class', rowInnerContentClass[k]);
                    rowInnerContent.appendChild(document.createTextNode(rowInnerContentData[k]));
                    rowContent.appendChild(rowInnerContent);
                }
            }

            //fixing accordion element
            const accHeadingfix = document.createElement('div');
            accHeadingfix.setAttribute('class', 'acc_heading_fix');
            accordionElement[a].appendChild(accHeadingfix);
        }
}


function accordionFunctionRun() {
    const accordionComps = document.getElementsByClassName("acc_heading");
    let k;
    
    for (k = 0; k < accordionComps.length; k++) {
        accordionComps[k].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
        });
    }
}



// All Devices Dropdown

function allDevicesFunction() {
    const allDevicesElement = document.getElementById('all_devices_element');
        const adDropdown = document.createElement('div');
        adDropdown.setAttribute('class', 'dropdown');
        allDevicesElement.appendChild(adDropdown);
            const adDropdownTab = document.createElement('div');
            adDropdownTab.setAttribute('class', 'tab all_devices_tab');
            adDropdown.appendChild(adDropdownTab);


            const adDropdownTabElement = ['all_devices_menu1', 'all_devices_menu2', 'all_devices_menu3'];
            for (i=0; i<adDropdownTabElement.length; i++) {
                const adDropdownTabMenu = document.createElement('div');
                adDropdownTabMenu.setAttribute('class', 'all_devices_tabcontent tabcontent');
                adDropdownTabMenu.setAttribute('id', adDropdownTabElement[i]);
                adDropdown.appendChild(adDropdownTabMenu);
                // console.log(adDropdownTabMenu);
            }

            tableData.forEach((data,i) => {
                console.log(data,i);
                if(i===0) {
                        for (r=0; r< data.child.length; r++) {
                            if(r % 2 == 0) {
                                let adDropdownMenuWrap = document.createElement('div');
                                adDropdownMenuWrap.setAttribute('class', 'menu_wrap');
                                let adDropdownTabMenuElement = document.getElementById(adDropdownTabElement[i]);
                                adDropdownTabMenuElement.appendChild(adDropdownMenuWrap);
                                let adDropdownMenuUl = document.createElement('ul');
                                adDropdownMenuWrap.appendChild(adDropdownMenuUl);
                                let adDropdownMenuli = document.createElement('li');
                                adDropdownMenuUl.appendChild(adDropdownMenuli);
                                let adDropdownMenuLink = document.createElement('a');
                                adDropdownMenuLink.setAttribute('href', data.child[r].url);
                                adDropdownMenuli.appendChild(adDropdownMenuLink);
                                adDropdownMenuLink.appendChild(document.createTextNode(data.child[r].title));
                                adDropdownMenuLink.setAttribute('class', "tabmenu_heading");
                                for (u=0; u< data.child[r].child.length; u++) {
                                    let adDropdownMenuli = document.createElement('li');
                                    adDropdownMenuUl.appendChild(adDropdownMenuli);
                                    let adDropdownMenuLink = document.createElement('a');
                                    adDropdownMenuLink.setAttribute('href', data.child[r].child[u].url);
                                    adDropdownMenuli.appendChild(adDropdownMenuLink);
                                    adDropdownMenuLink.appendChild(document.createTextNode(data.child[r].child[u].title));
                                }
                            }
                            
                            // if the number is odd
                            else {
                                var tempData = document.getElementById(adDropdownTabElement[i]);
                                let adDropdownMenuUl = document.createElement('ul');
                                tempData.childNodes[tempData.childNodes.length - 1].appendChild(adDropdownMenuUl);
                                let adDropdownMenuli = document.createElement('li');
                                adDropdownMenuUl.appendChild(adDropdownMenuli);
                                let adDropdownMenuLink = document.createElement('a');
                                adDropdownMenuLink.setAttribute('href', data.child[r].url);
                                adDropdownMenuli.appendChild(adDropdownMenuLink);
                                adDropdownMenuLink.appendChild(document.createTextNode(data.child[r].title));
                                
                                adDropdownMenuLink.setAttribute('class', "tabmenu_heading");
                                for (u=0; u< data.child[r].child.length; u++) {
                                    let adDropdownMenuli = document.createElement('li');
                                    adDropdownMenuUl.appendChild(adDropdownMenuli);
                                    let adDropdownMenuLink = document.createElement('a');
                                    adDropdownMenuLink.setAttribute('href', data.child[r].child[u].url);
                                    adDropdownMenuli.appendChild(adDropdownMenuLink);
                                    adDropdownMenuLink.appendChild(document.createTextNode(data.child[r].child[u].title));
                                }
                            }
                            
                        }
                } else {
                    for (r=0; r< data.child.length; r++) {
                        let adDropdownMenuWrap = document.createElement('div');
                        adDropdownMenuWrap.setAttribute('class', 'menu_wrap');
                        let adDropdownTabMenuElement = document.getElementById(adDropdownTabElement[i]);
                        adDropdownTabMenuElement.appendChild(adDropdownMenuWrap);
                        let adDropdownMenuUl = document.createElement('ul');
                        adDropdownMenuWrap.appendChild(adDropdownMenuUl);
                        let adDropdownMenuli = document.createElement('li');
                        adDropdownMenuUl.appendChild(adDropdownMenuli);
                        let adDropdownMenuLink = document.createElement('a');
                        adDropdownMenuLink.setAttribute('href', data.child[r].url);
                        console.log(adDropdownMenuLink);
                        adDropdownMenuli.appendChild(adDropdownMenuLink);
                        adDropdownMenuLink.appendChild(document.createTextNode(data.child[r].title));
                        adDropdownMenuLink.setAttribute('class', "tabmenu_heading");
                        for (u=0; u< data.child[r].child.length; u++) {
                            let adDropdownMenuli = document.createElement('li');
                            adDropdownMenuUl.appendChild(adDropdownMenuli);
                            let adDropdownMenuLink = document.createElement('a');
                            adDropdownMenuLink.setAttribute('href', data.child[r].child[u].url);

                            adDropdownMenuli.appendChild(adDropdownMenuLink);
                            adDropdownMenuLink.appendChild(document.createTextNode(data.child[r].child[u].title));
                        }
                    }
                }
            });

            let adDropdownTabHeading = document.createElement('button');
            adDropdownTabHeading.setAttribute('class', 'all_devices tablinks active main_wrap');
            
            adDropdownTabHeading.appendChild(document.createTextNode('All Devices'));
            adDropdownTab.appendChild(adDropdownTabHeading);
            for (j=0; j< adDropdownButton.length; j++) {
                const adDropdownTabButton = document.createElement('button');
                adDropdownTabButton.setAttribute('class', 'all_devices tablinks');
                adDropdownTabButton.setAttribute('onclick', "megaMenu(event,'" + adDropdownTabElement[j] + "')");
                adDropdownTabButton.appendChild(document.createTextNode(adDropdownButton[j]));
                adDropdownTab.appendChild(adDropdownTabButton);
            }
}

// Two sided range slider

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
                    $( "#first-" + sliderRange ).val( "$" + ui.values[ 0 ]);
                    $( "#last-" + sliderRange ).val( "$" + ui.values[ 1 ] );
                }
            });

            $( "#first-" + sliderRange ).val( "$" + $( "#slider-range-" + sliderRange ).slider( "values", 0 ) );
            $( "#last-" + sliderRange ).val( "$" + $( "#slider-range-" + sliderRange).slider( "values", 1 ) );
                        
        }, 1000);
    });    
});