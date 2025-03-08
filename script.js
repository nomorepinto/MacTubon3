window.onload = function () {
    console.log("Page loaded - Adding tabindex to images");

    let images = document.querySelectorAll("#gallery img");
    
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        
        images[i].addEventListener("mouseover", function () {
            this.style.border = "3px solid blue";
            console.log("Mouse over image " + (i + 1));
        });

        images[i].addEventListener("mouseleave", function () {
            this.style.border = "none";
            console.log("Mouse left image " + (i + 1));
        });

        images[i].addEventListener("focus", function () {
            this.style.border = "3px solid red";
            console.log("Focused on image " + (i + 1));
        });

        images[i].addEventListener("blur", function () {
            this.style.border = "none";
            console.log("Blurred image " + (i + 1));
        });
    }
};
