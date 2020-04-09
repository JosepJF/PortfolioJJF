//Change icon navbar
function changeIcon(icon) {
    icon.classList.toggle("change");
}

// Display animated menu
function openCloseNavBar() {
    if (document.getElementById("mySidenav").style.height === "100%") {
        // CLOSE
        document.getElementById("mySidenav").style.height = "0";
        document.getElementById("mySidenav").style.top = "-10px";
        document.getElementById("body").style.overflow = "visible";
    } else {
        // OPEN
        document.getElementById("mySidenav").style.height = "100%";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("mySidenav").style.top = "55px";
    }
}

// Call when click on icon
function navBarIconClick(icon) {
    changeIcon(icon);
    openCloseNavBar();
}

// Hidden animated menu when click on inside link
// function clickButtonNavBar(icon) {
//     document.getElementById("mySidenav").style.height = "0";
//     document.getElementById("mySidenav").style.top = "-10px";
//     document.getElementById("body").style.overflow = "visible";
//     document.getElementById("menu-icon").classList.toggle("change");
// }