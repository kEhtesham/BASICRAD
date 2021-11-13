const adDropdownButton = [];

function allDevicesJsonObjFunction() {
    tableData.forEach(data => {
        adDropdownButton.push(data.title);
    });
}

// function accordionDataFunction() {
//     accordionData.forEach(accData => {
//     });
// }




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
                }
                else {
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


function navbarAnimation() {
    var hamburger = document.querySelector('.hamburger');
    if(hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
    }
    else {
        hamburger.classList.add('active');
    }
}