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
    var accordion_comp = document.getElementsByClassName("acc_heading");
    var k;
    
    for (k = 0; k < accordion_comp.length; k++) {
        accordion_comp[k].addEventListener("click", function() {
        this.classList.toggle("active");
        // if(this.hasClass == "active"){
        //     alert('active');
        //     console.log('test');
        // }
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
        });
    }
    // var accordion_comp_active = document.querySelectorAll(".acc_heading.active");
    
    // for(i=0; i < accordion_comp_active.length; i++) {
    //     var totalHeight = accordion_comp_active[i].getBoundingClientRect().height;
    //     totalHeight = 78 * accordion_comp_active.length;
    //     console.log(totalHeight);
    // }
    // console.log(document.querySelector('body').getBoundingClientRect().height);
}


//Accordion height on click

// function accordionheightFunction() {
//     var accordion_comp_active = document.querySelectorAll(".acc_heading.active");
//     var accordion_elem = document.getElementsByClassName('accordion_elem');

//     for(i=0; i < accordion_comp_active.length; i++) {
//         var totalHeight = accordion_comp_active[i].getBoundingClientRect().height;
//         totalHeight = totalHeight + 26;
//         accordion_elem[i].style.height = totalHeight + "px";
//         console.log(accordion_elem);
//     }
// }

// Dropdown accordion 

var dropdown_accordion = document.getElementsByClassName("dropdown_acc_head");
var i;

for (i = 0; i < dropdown_accordion.length; i++) {
    dropdown_accordion[i].addEventListener("click", function() {
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
    var acc_filtr_clear = document.querySelectorAll('.' + className + '  .acc_filtr_check');
    for (i = 0; i < acc_filtr_clear.length; i++) {
        acc_filtr_clear[i].checked = false;
    }
}
function collapsfiltrFunction(event, className) {
    var acc_filtr_collaps = document.querySelectorAll('.' + className + '  .dropdown_acc_content');
    for (i = 0; i < acc_filtr_collaps.length; i++) {
        acc_filtr_collaps[i].style.display = "none";
    }
}
function expandfiltrFunction(event, className) {
    var acc_filtr_block = document.querySelectorAll('.' + className + '  .dropdown_acc_content');
    for (i = 0; i < acc_filtr_block.length; i++) {
        acc_filtr_block[i].style.display = "block";
    }
}


// filter append

function filterpushFunction(func_ID) {
    // debugger
    var FilterAdded = document.getElementById(func_ID);
    if (FilterAdded.checked == true) {
        var all_filter_listing = document.getElementsByClassName('all_filter_listing');
        var input_loop = document.getElementById(func_ID).step;
        
            var filter_elem = document.createElement("div");
            filter_elem.setAttribute('class','filter_elem');
                var filtr_options = document.createElement("div");
                filtr_options.setAttribute('class','filtr_options');

                var element_content = document.getElementById(func_ID).value;
                // console.log(func_ID);
                filtr_options.appendChild(document.createTextNode(element_content));

            filter_elem.appendChild(filtr_options);
                var total_filter = document.createElement("div");
                total_filter.setAttribute('class','total_filter');
                total_filter.appendChild(document.createTextNode('(All)'));
            filtr_options.appendChild(total_filter);
                var caret_down = document.createElement("i");
                caret_down.setAttribute('class','fas fa-caret-down');
            filtr_options.appendChild(caret_down);
                var filteration_options = document.createElement("div");
                filteration_options.setAttribute('class','filteration_options');
            filter_elem.appendChild(filteration_options);

        if (FilterAdded.classList.contains('dropdown_push')){
                
                // filteration_options

                    var selectall_filtr = document.createElement("div");
                    selectall_filtr.appendChild(document.createTextNode('Select All'));
                    selectall_filtr.setAttribute('class','select_all');

                    filteration_options.appendChild(selectall_filtr);

                    var selectnone_filtr = document.createElement("div");
                    selectnone_filtr.appendChild(document.createTextNode('Select None'));
                    selectnone_filtr.setAttribute('class','select_none');

                    filteration_options.appendChild(selectnone_filtr);
                
                    var inner_filtr_wrap = document.createElement("div");
                    inner_filtr_wrap.setAttribute('class','filtr_wrap');
            
                    filteration_options.appendChild(inner_filtr_wrap);

                    for (k=0; k<input_loop; k++) {
                        var filtr_wrap_parent = document.createElement("div");
                        filtr_wrap_parent.setAttribute('class','filtr_element_wrap');

                        inner_filtr_wrap.appendChild(filtr_wrap_parent);

                        var input_innerFilter = document.createElement("input");
                        
                        var element_array = ["Maxim", "AVX", "Yageo"];
                        input_innerFilter.setAttribute('type','checkbox');
                        input_innerFilter.setAttribute('id', 'id'+k);
                        filtr_wrap_parent.appendChild(input_innerFilter);

                        var label_innerFilter = document.createElement("label");
                        label_innerFilter.setAttribute('for','id'+k);
                        label_innerFilter.innerHTML=element_array[k];
                        filtr_wrap_parent.appendChild(label_innerFilter);
                    }

                    console.log(filteration_options);

            all_filter_listing[0].appendChild(filter_elem);
        }
        
        else {
            var range_innerFilter = document.createElement("input");
            range_innerFilter.setAttribute('type','range');
            filteration_options.appendChild(range_innerFilter);
            filter_elem.appendChild(filteration_options);
            all_filter_listing[0].appendChild(filter_elem);
            console.log(all_filter_listing[0]);
        }
    }
    else {
        console.log('its not a dropdown');
    }
}


// filteration_options


/*
    <input value="500" min="500" max="50000" step="500" type="range" onchange="movedFunction()" id="first_value">
    <input value="50000" min="500" max="50000" step="500" type="range" onchange="movedFunction()" id="last_value">
*/