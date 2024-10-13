// Count Down Start
let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");

setInterval(() => {
  seconds.textContent--;
  if (seconds.textContent == -1) {
    seconds.textContent = 59;
    minutes.textContent--;
  }
}, 1000);

// Count Down End

// Count Up Start
let numbers = document.querySelectorAll(".number");
let page = document.querySelector(".status-page");
let reached = false;

window.onscroll = function () {
  if (window.scrollY >= page.offsetTop) {
    if (!reached) {
      numbers.forEach((el) => {
        let goal = el.getAttribute("data-goal");
        let intervl = setInterval(
          () => {
            el.textContent++;
            if (el.textContent == goal) {
              clearInterval(intervl);
            }
          },
          1500 / goal,
          el
        );
        reached = true;
      });
    }
  }
};

// Count Up End

let last_link = document.getElementById("last-link");
let mega_menu = document.querySelector(".mega-menu");
let open = false;

last_link.onclick = function () {
  if (!open) {
    mega_menu.style.cssText = "opacity: 1; top: 1px;";
    open = true;
  } else {
    mega_menu.style.cssText = "opacity: 0; top: 20px;";
    open = false;
  }
};
