$(document).ready(function() {
    $("#open").click(function() {
        $("#logo-nav").fadeIn(4500);
    });
});

function openNav() {
    setTimeout(function() {
        document.getElementById("open").style.display = "none";
    }, 200);
    document.getElementById("nav").style.width = "50%";
    document.getElementById("nav").style.borderRight = "solid rgba(0, 0, 0, 0.1) 1px";
    setTimeout(function() {
        document.getElementById("logo-nav").style.display = "block";
    }, 500);
}

function closeNav() {
    document.getElementById("logo-nav").style.display = "none";
    document.getElementById("nav").style.width = "0";
    setTimeout(function() {
        document.getElementById("open").style.display = "block";
        document.getElementById("nav").style.borderRight = "none";
    }, 450);
}
