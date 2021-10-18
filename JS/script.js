// megamenu 

function megaMenu(evt, megaMenu) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(megaMenu).style.display = "flex";
    evt.currentTarget.className += " active";
}

function activeMegaMenu(className, elementName, elementListClassName){
    var selectedClassElemets = document.getElementsByClassName(className);
    for(var i = 0; i<selectedClassElemets[0].children.length ; i++) {
        selectedClassElemets[0].children[i].classList.remove('active');
    }
    selectedClassElemets[0].children[0].classList.add('active');
    var selectedElementList = document.getElementsByClassName(elementListClassName);
    for(var i = 0; i<selectedElementList.length ; i++) {
        selectedElementList[i].style.display = "none";
    }
    document.getElementById(elementName).style.display = "flex";
}

// accordion 

function myFunction() {
    var accordionComp = document.getElementsByClassName("acc_heading");
    var k;
    
    for (k = 0; k < accordionComp.length; k++) {
        accordionComp[k].addEventListener("click", function() {
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

function clearfiltrFunction(event, className) {
    var accordionfilterClear = document.querySelectorAll('.' + className + '  .acc_filtr_check');
    for (i = 0; i < accordionfilterClear.length; i++) {
        accordionfilterClear[i].checked = false;
    }
}
function collapsfiltrFunction(event, className) {
    var accordionfilterCollaps = document.querySelectorAll('.' + className + '  .dropdown_acc_content');
    for (i = 0; i < accordionfilterCollaps.length; i++) {
        accordionfilterCollaps[i].style.display = "none";
    }
}
function expandfiltrFunction(event, className) {
    var accordionfilterBlock = document.querySelectorAll('.' + className + '  .dropdown_acc_content');
    for (i = 0; i < accordionfilterBlock.length; i++) {
        accordionfilterBlock[i].style.display = "block";
    }
}


// filter append

function filterpushFunction(filterId) {
    // console.log('filterId', filterId);
    var FilterAdded = document.getElementById(filterId);
    var allfilterListing = document.getElementsByClassName('all_filter_listing');
    if (FilterAdded.checked == true) {
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

            if (FilterAdded.classList.contains('dropdown_push')){
                    
                    // filterationOptions

                        var selectall_filtr = document.createElement("div");
                        selectall_filtr.appendChild(document.createTextNode('Select All'));
                        selectall_filtr.setAttribute('class','select_all');

                        filterationOptions.appendChild(selectall_filtr);

                        var selectnone_filtr = document.createElement("div");
                        selectnone_filtr.appendChild(document.createTextNode('Select None'));
                        selectnone_filtr.setAttribute('class','select_none');

                        filterationOptions.appendChild(selectnone_filtr);
                    
                        var innerfilterWrap = document.createElement("div");
                        innerfilterWrap.setAttribute('class','filtr_wrap');
                
                        filterationOptions.appendChild(innerfilterWrap);

                        for (k=0; k<inputLoop; k++) {
                            var filterwrapParent = document.createElement("div");
                            filterwrapParent.setAttribute('class','filtr_element_wrap');

                            innerfilterWrap.appendChild(filterwrapParent);

                            var inputinnerFilter = document.createElement("input");
                            
                            var elementArray = ["Maxim", "AVX", "Yageo"];
                            inputinnerFilter.setAttribute('type','checkbox');
                            inputinnerFilter.setAttribute('id', 'id'+ k);
                            filterwrapParent.appendChild(inputinnerFilter);

                            var labelinnerFilter = document.createElement("label");
                            labelinnerFilter.setAttribute('for','id'+k);
                            labelinnerFilter.innerHTML=elementArray[k];
                            filterwrapParent.appendChild(labelinnerFilter);
                        }

                    allfilterListing[0].appendChild(filterElement);
            }
            else {
                let id = () => {
                    return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
                }
                    var uniqueId = id();
                
                    var rangeInnerFilter = document.createElement("input");
                    rangeInnerFilter.setAttribute('type','range');
                    rangeInnerFilter.setAttribute('class','rangefirstValue');
                    var newrangeID = 'firstRnge-' + uniqueId;
                    rangeInnerFilter.setAttribute('id', newrangeID);
                    rangeInnerFilter.setAttribute('onChange','getRangeFunction(this.id)');
                    filterationOptions.appendChild(rangeInnerFilter);

                    var lastrangeInnerFilter = document.createElement("input");
                    lastrangeInnerFilter.setAttribute('type','range');
                    lastrangeInnerFilter.setAttribute('class','rangelastValue');
                    var newrangeID = 'lastRnge-' + uniqueId;
                    lastrangeInnerFilter.setAttribute('id', newrangeID);
                    lastrangeInnerFilter.setAttribute('onChange','getlastRangeFunction(this.id)');
                    filterationOptions.appendChild(lastrangeInnerFilter);
                    
                    var firstrangeValue = document.createElement("input");
                    firstrangeValue.setAttribute('value', '50');
                    var newinputID = 'fstRnge-' + uniqueId;
                    firstrangeValue.setAttribute('class','inputfirstValue');
                    firstrangeValue.setAttribute('id', newinputID);
                    firstrangeValue.setAttribute('onkeyup','getinputFunction(this.id)');
                    filterationOptions.appendChild(firstrangeValue);

                    var lastrangeValue = document.createElement("input");
                    lastrangeValue.setAttribute('value', '50');
                    var newinputID = 'lstRnge-' + uniqueId;
                    lastrangeValue.setAttribute('class','inputfirstValue');
                    lastrangeValue.setAttribute('id', newinputID);
                    lastrangeValue.setAttribute('onkeyup','getinputFunction(this.id)');
                    filterationOptions.appendChild(lastrangeValue);

                filterElement.appendChild(filterationOptions);
            allfilterListing[0].appendChild(filterElement);
            }
    }
    else {
        var removeFilter = document.getElementsByClassName(filterId+"-chk");
        removeFilter[0].remove();
    }
}


function getRangeFunction(functionId) {
    var getrangeValue = document.getElementById(functionId).value;
    // var inputfirstValue = document.getElementById(functionId).nextSibling;
    // inputfirstValue.value=getrangeValue;
    var inputfirstnextsibling = document.getElementById(functionId).nextSibling;
    var inputfirstValue = inputfirstnextsibling.nextSibling;
    inputfirstValue.value=getrangeValue;
}

function getlastRangeFunction(lastrangeId) {
    var getlastrangeValue = document.getElementById(lastrangeId).value;
    var inputlastnextsibling = document.getElementById(lastrangeId).nextSibling;
    var inputlastValue = inputlastnextsibling.nextSibling;
    inputlastValue.value = getlastrangeValue;
}

function getinputFunction(inputId) {
    var getinputValue = document.getElementById(inputId).value;
    var pushpriviousValue = document.getElementById(inputId).previousSibling;
    var priviousinputValue = pushpriviousValue.previousSibling;
    priviousinputValue.value = getinputValue;
}