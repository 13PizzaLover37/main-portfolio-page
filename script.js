let modeStatus = "day";
let catcherModeSymbol = document.getElementsByClassName("switcher")[0];

catcherModeSymbol.addEventListener("click", function(){
    if (modeStatus ==="day" ? switchModeToNight() : switchModeToDay()); 
});

function switchModeToNight(){
    catcherModeSymbol.classList.remove("fa-sun", "fas"); // remove sun symbol
    catcherModeSymbol.classList.add("far","fa-moon"); //adding moon symbol
    document.getElementsByTagName("body")[0].classList.add("night_mode");
    document.querySelector("#navbar").style.background = "wheat";
    modeStatus = "night";
}

function switchModeToDay(){
    document.getElementsByTagName("body")[0].classList.remove("night_mode");
    catcherModeSymbol.classList.remove("far","fa-moon"); //remove moon symbol
    catcherModeSymbol.classList.add("fa-sun", "fas"); // adding sun symbol
    document.querySelector("#navbar").style.background = "white";
    modeStatus = "day";
}