
setInterval(function () {
    var now = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString();
}, 1000)






document.onreadystatechange = () => {
    if (document.readyState == "interactive") {
        var hash = window.location.hash.substr(1);
        if (hash.length <= 0) {
            newDock('#Main');
            //alert(hash + ' '+hash.length + ' 1 ');
        }
        else {
            newDock('#' + hash);
            //alert(hash + ' ' + hash.length + ' 2 ');
        }
    }
};

