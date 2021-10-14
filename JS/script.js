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