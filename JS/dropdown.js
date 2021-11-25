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
                const newlastClassFirst = "first";
                const newfirstInputID = 'first-' + filterId;                
                firstRangeValue.setAttribute('id', newfirstInputID);
                firstRangeValue.setAttribute('min', '10');
                RangeValueWrap.appendChild(firstRangeValue);

                const lastRangeValue = document.createElement("input");
                lastRangeValue.setAttribute('type', 'text');
                const lastClassFirseLast = 'last-';
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



function loadJsFunction() {
    allDevicesJsonObjFunction();
    accordionFunction();
    accordionFunctionRun();
    allDevicesFunction();
    navbarResponsive();
}