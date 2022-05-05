const button = document.getElementById("colorChange");
const bg = document.getElementById("bg");

const colors = ["#ff0000", "#00ff00", "#0000ff"];
const buttonColors = ["#11ffff", "#000034", "#340000"];


button.addEventListener("click", () => {
    //bg 
    let color = colors.shift();
    colors.push(color);
    //button
    let buttonColor = buttonColors.shift();
    buttonColors.push(buttonColor);
    //text

    bg.style.background = `linear-gradient(${color}, #333)`;
    button.style.backgroundColor = buttonColor;
});

