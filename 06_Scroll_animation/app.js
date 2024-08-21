window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

function setScrollVar() {
  const htmlElement = document.documentElement;
  const percentOfScreenHeighScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight;
  console.log(Math.min(percentOfScreenHeighScrolled * 100, 100));
  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfScreenHeighScrolled * 100, 100)
  );
}

setScrollVar();
