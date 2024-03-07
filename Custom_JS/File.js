function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "top-nav") {
        x.className += " responsive";
    } else {
        x.className = "top-nav"
    }
}