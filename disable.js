window.addEventListener("load", main, false);

function main(e) {
    const jsInitCheckTime = setInterval(jsLoaded, 1000);
    function jsLoaded() {
        var ember = document.getElementsByClassName("cs-navigation-item ember-view");
        for (var i = 0; i < ember.length; i++) {
            if(ember[i].textContent.match("CrowdStrike Store")) {
                var elements = document.getElementById(ember[i].id);
                elements.parentNode.removeChild(elements);
            }
        }
    }
}
