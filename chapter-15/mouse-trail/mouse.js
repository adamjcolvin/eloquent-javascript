let mouseTrail = [];

document.addEventListener("mousemove", (event) => {
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  const mouseDiv = document.createElement("div");
  mouseDiv.className = "trail";
  mouseDiv.style.left = mouseX + "px";
  mouseDiv.style.top = mouseY + "px";
  document.body.appendChild(mouseDiv);
  mouseTrail.push(mouseDiv);
  if (mouseTrail.length >= 50) {
    let removedMouse = mouseTrail.shift();
    removedMouse.remove();
  }
});
