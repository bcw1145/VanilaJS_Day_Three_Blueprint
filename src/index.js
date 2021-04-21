// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const form = document.querySelector("h2");

const superEventHandler = {
  mouseTop: function () {
    form.innerText = "The mouse is here!";
    form.style.color = "#1abc9c";
  },
  mouseLeave: function () {
    form.innerText = "The mouse is gone!";
    form.style.color = "#3498db";
  },
  mouseResized: function (event) {
    form.innerText = "You just resized!";
    form.style.color = "#9b59b6";
  },
  mouseRightClicked: function (event) {
    if (event.button == 2 || event.which == 3) {
      form.innerText = "That was a right clicked!";
      form.style.color = "#f39c12";
    }
  }
};

function init() {
  form.addEventListener("mouseenter", superEventHandler.mouseTop);
  form.addEventListener("mouseleave", superEventHandler.mouseLeave);
  document.addEventListener("mousedown", superEventHandler.mouseRightClicked);
  window.addEventListener("resize", superEventHandler.mouseResized);
}

init();
