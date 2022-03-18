// Function to change the content of t2
function modifyText(new_text) {
  var t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// Function to add event listener to t
function load() {
  var el = document.getElementById("t");
  el.addEventListener(
    "click",
    function () {
      modifyText("four");
    },
    false
  );
  document.addEventListener("DOMContentLoaded", load, false);
}

load();
