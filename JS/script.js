const adDropdownButton = [];

function allDevicesJsonObjFunction() {
    tableData.forEach(data => {
        adDropdownButton.push(data.title);
    });
}

function accordionDataFunction() {
    accordionData.forEach(accData => {
    });
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
    allDevicesJsonObjFunction();
    accordionDataFunction();
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
    const accordionDataElement = document.getElementById('accordion_data_element_id');
    var result = accordionData[0].results.reduce(function (r, a) {
        r[a.partNumber] = r[a.partNumber] || [];
        r[a.partNumber].push(a);
        return r;
    }, Object.create(null));
    console.log('aa_>', result);

    for(a=0; a< Object.keys(result).length; a++) {
        console.log(a, result[Object.keys(result)[a]]);
        const adAccButtonElement = document.createElement('div');
         adAccButtonElement.setAttribute('class', 'accordion_elem');
         adAccButtonElement.setAttribute('id', 'accordion_elem_' + a);
         accordionDataElement.appendChild(adAccButtonElement);

            const accHeading = document.createElement('div');
             accHeading.setAttribute('class', 'acc_heading active');
             adAccButtonElement.appendChild(accHeading);

                              // accordion heading
                 const accHead = document.createElement('div');
                 accHead.setAttribute('class', 'acc_head acc_head_top');
                 accHeading.appendChild(accHead);

                    const downArrow = document.createElement('i');
                     downArrow.setAttribute('class', 'fas fa-chevron-down');
                     accHead.appendChild(downArrow);

                         const acordionContentwrap = document.createElement('div');
                         acordionContentwrap.setAttribute('class', 'acc_content_head_wrap');
                         acordionContentwrap.setAttribute('id', Object.keys(result)[a]);
                         accHead.appendChild(acordionContentwrap);
                         acordionContentwrap.appendChild(document.createTextNode(Object.keys(result)[a]));

                            const acordionContentinnerwrap = document.createElement('span');
                            acordionContentwrap.appendChild(acordionContentinnerwrap);
                            acordionContentinnerwrap.appendChild(document.createTextNode('| ' + 'SKU:XXXXXXXXX'));
                            
                            const acordionRadiationinfo = document.createElement('div');
                            acordionRadiationinfo.setAttribute('class', 'radiation_test_detail');
                            accHead.appendChild(acordionRadiationinfo);
                            acordionRadiationinfo.appendChild(document.createTextNode('(' + '3 ' + 'Radiation Tests)'));

                            //accordion sub heading content
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

                                        const accContent = document.createElement('div');
            accContent.setAttribute('class', 'acc_content');
            accContent.setAttribute('style', 'display:block');
            adAccButtonElement.appendChild(accContent);
            
            const rowInnerContentClass= [ {class: 'part_number', key: 'partNumber', value: ''},
            {class: 'SKU', key: '', value: 'SKU-02'}, 
            {class: 'device_type', key: 'deviceType', value: ''},
            {class: 'manufacturer updated', key: 'manufacturer', value: ''},
            {class: 'rev', key: 'revisionNumber', value: ''},
            {class: 'rev_date', key: 'revisionDate', value: ''},
            {class: 'lot_code', key: 'lotCode', value: ''},
            {class: 'capacitance updated', key: 'capacitance', value: ''},
            {class: 'rated_voltage updated', key: 'ratedVoltage', value: ''},
            {class: 'positive_tolerance updated', key: 'positiveTolerance', value: ''},
            {class: 'negative_tolerance updated', key: 'negativeTolerance', value: ''},
            {class: 'radiation_test updated', key: 'ratedVoltage', value: ''},
            {class: 'test_category updated', key: 'testCategory', value: ''},
            {class: 'source updated', key: 'source', value: ''},
            {class: 'test_date updated', key: 'testDate', value: ''},
            {class: 'test_details updated', key: 'testDetails', value: ''},
            {class: 'result updated', key: 'testResult', value: ''}
        ];
            console.log('Object.keys(result)[a]', result[Object.keys(result)[a]].length);
            for (i=0; i< result[Object.keys(result)[a]].length; i++) {
                const rowContent = document.createElement('div');
                rowContent.setAttribute('class', 'row_content');
                accContent.appendChild(rowContent);
                for (m=0; m< rowInnerContentClass.length; m++) {
                        const rowInnerContent= document.createElement('div');
                    rowInnerContent.setAttribute('class', rowInnerContentClass[m].class);
                    if(rowInnerContentClass[m].key === ''){
                        rowInnerContent.appendChild(document.createTextNode(rowInnerContentClass[m].value));
                    } else {
                        rowInnerContent.appendChild(document.createTextNode(result[Object.keys(result)[a]][i][rowInnerContentClass[m].key]));
                    }
                    
                    // console.log(rowInnerContentData[k]);
                    rowContent.appendChild(rowInnerContent);
                    console.log(rowInnerContentClass[m].key, );
                }

            }
            console.log();
            //fixing accordion element
            const accHeadingfix = document.createElement('div');
            accHeadingfix.setAttribute('class', 'acc_heading_fix');
            adAccButtonElement.appendChild(accHeadingfix);
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
            }

            tableData.forEach((data,i) => {
                // console.log(data,i);
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