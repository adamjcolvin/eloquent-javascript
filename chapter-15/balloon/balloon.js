document.addEventListener("keydown", (event) => {
  let balloon = document.querySelector("#balloon");
  if (event.key == "ArrowUp" && balloon.textContent == "🎈") {
    adjustFontSize(balloon, 1.1);
  } else if (event.key == "ArrowDown" && balloon.textContent == "🎈") {
    adjustFontSize(balloon, 0.9);
  }
  checkForExplosion(balloon);
  function adjustFontSize(balloon, multiplier) {
    let currentFontSize = window.getComputedStyle(balloon).fontSize;
    let fontSizeNumber = parseFloat(currentFontSize);
    let newFontSize = fontSizeNumber * multiplier;
    balloon.style.fontSize = newFontSize + "px";
    return balloon;
  }
  function checkForExplosion(balloon) {
    let currentFontSize = window.getComputedStyle(balloon).fontSize;
    let fontSizeNumber = parseFloat(currentFontSize);
    if (fontSizeNumber >= 100) {
      balloon.textContent = "💥";
    }
  }
});
