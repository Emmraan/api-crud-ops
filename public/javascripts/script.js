function menuSlider() {
  const menu = document.querySelector(".menu");
  const menuList = document.querySelector(".menu-list");

  let isOpen = false;

  menu.addEventListener("click", () => {
    if (isOpen) {
      menuList.style.left = "-90%";
      isOpen = false;
    } else {
      menuList.style.left = "-1%";
      isOpen = true;
    }
  });
}
menuSlider();

function preventChangeReadOnly() {
  document.addEventListener("DOMContentLoaded", function () {
    var readonlyInputs = document.getElementsByClassName("readonly");

    // Function to check and reapply readonly attribute
    function checkReadonly() {
      for (var i = 0; i < readonlyInputs.length; i++) {
        var input = readonlyInputs[i];
        if (!input.getAttribute("readonly")) {
          input.setAttribute("readonly", "true");
        }
      }
    }

    // Check and reapply readonly attribute on interval
    setInterval(checkReadonly, 100);

    // Prevent right-click context menu and dragging of each readonly input field
    for (var i = 0; i < readonlyInputs.length; i++) {
      readonlyInputs[i].addEventListener("contextmenu", function (event) {
        event.preventDefault();
      });

      readonlyInputs[i].addEventListener("mousedown", function (event) {
        event.preventDefault();
      });
    }
  });
}
preventChangeReadOnly();