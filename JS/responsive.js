function navbarResponsive() {
    var logo = document.querySelector('.logo');
    var search_area = document.querySelector('.search_area');
    var navbar = document.querySelector('.navbar');
    var profile_element = document.querySelector('.profile_element');

    if (screen.width < 768) {        
        navbar.parentNode.insertBefore(logo, navbar.nextSibling);
        profile_element.parentNode.insertBefore(search_area, profile_element.nextSibling);
        document.querySelector('.search_item').placeholder = 'Search';
    }
    else {
        navbar.parentNode.insertBefore(logo, navbar);
        profile_element.parentNode.insertBefore(search_area, profile_element);
        profile_element.parentNode.insertBefore(navbar, profile_element);
        document.querySelector('.search_item').placeholder = 'Search for device category, part number, or tech specs';
    }
}