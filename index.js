document.getElementById("formSearch").onsubmit = function () {
    window.location = "http://www.google.com/search?q=" + document.getElementById("container_searchBar").value;
    return false;
}
