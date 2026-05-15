// CONFIGS
let rate = 30;
let spread = 200;
// Change animation time if you want to change it
let fade = 800;

let time = Date.now();
document.addEventListener("mousemove", (e) => {
  if (Date.now() - time > rate) {
    console.log("hi");

    time = Date.now();

    let xoff = (Math.random() - 0.5) * spread;
    let yoff = (Math.random() - 0.5) * spread;

    let template = document.getElementById("star-template");
    let element = template.content.cloneNode(true).firstElementChild;
    element.classList.add("star");
    element.style.left = e.clientX + xoff + "px";
    element.style.top = e.clientY + yoff + "px";
    document.body.appendChild(element);

    setTimeout(() => {
      document.body.removeChild(element);
    }, fade);
  }
});