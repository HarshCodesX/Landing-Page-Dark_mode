let icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./assets/icons/sun.png";
    }
    else{
        icon.src = "./assets/icons/moon.png";
    }
}