const button = document.querySelector(".btn");

button.addEventListener("mouseover", (event) => {
  const x = (event.pageX - button.offsetLeft);
  const y = (event.pageY - button.offsetTop);

  button.style.setProperty("--posX", x + "px");
  button.style.setProperty("--posY", y + "px");
});