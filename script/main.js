let inputs = document.querySelectorAll(".box input[type='range']"),
  color = document.querySelector("#color");

//   The Colors Progresses
let rgbColors = {
  red: 0,
  green: 0,
  blue: 0,
};

inputs.forEach((ele) => {
  // On Input On Any range
  ele.addEventListener("input", (e) => {
    //   Update The Color Progress From The Object
    rgbColors[e.target.id] = e.target.value;
    // Update The Color Progress Form The Page
    document.querySelector(`#${e.target.id}-prog`).innerHTML =
      rgbColors[e.target.id];

    //   Update The Color Progress Form The color place
    color.innerHTML = `rgb(${rgbColors.red}, ${rgbColors.green}, ${rgbColors.blue})`;

    // Update The Body Background Color
    setColor(`rgb(${rgbColors.red}, ${rgbColors.green}, ${rgbColors.blue})`);
  });
});

// Update Body Background Color And Ranges Container
function setColor(clr) {
  document.body.style.backgroundColor = clr;
  document.querySelector(".container").style.backgroundColor = "white";
}
