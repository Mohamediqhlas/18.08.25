const box = document.getElementById("demoBox");

const marginSlider = document.getElementById("marginSlider");
const borderSlider = document.getElementById("borderSlider");
const paddingSlider = document.getElementById("paddingSlider");

const marginValue = document.getElementById("marginValue");
const borderValue = document.getElementById("borderValue");
const paddingValue = document.getElementById("paddingValue");


marginSlider.addEventListener("input", () => {
  box.style.margin = marginSlider.value + "px";
  marginValue.textContent = marginSlider.value + "px";
});

borderSlider.addEventListener("input", () => {
  box.style.borderWidth = borderSlider.value + "px";
  borderValue.textContent = borderSlider.value + "px";
});


paddingSlider.addEventListener("input", () => {
  box.style.padding = paddingSlider.value + "px";
  paddingValue.textContent = paddingSlider.value + "px";
});