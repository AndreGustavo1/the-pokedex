const themeSwitcher = document.getElementById("theme-switcher");
const buttonImageSwitcher = document.querySelector(".button-image-switcher");
const body = document.querySelector("body");

themeSwitcher.addEventListener("click", () =>{

    const darkThemeActive = body.classList.contains("dark-theme");
    
    body.classList.toggle("dark-theme");
    
    if(darkThemeActive) {
        buttonImageSwitcher.setAttribute("src", "./src/images/sun.png");
    } else{
        buttonImageSwitcher.setAttribute("src", "./src/images/moon.png");
    }
});