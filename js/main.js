let hamburgerIcon = document.querySelector(".ham");
let menuItems = document.querySelector(".menuItems");
let nav = document.querySelector("nav");
let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let bar3 = document.querySelector(".bar3");

const menuFunction = () => {
  menuItems.classList.toggle("close");
  menuItems.classList.toggle("active");
  bar1.classList.toggle("activeBar1");
  bar2.classList.toggle("activeBar2");
  bar3.classList.toggle("activeBar3");
};

let sticky = nav.offsetTop;
const stickyNav = () => {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
$(document).ready(function () {
  $(".workBtn").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#projects").offset().top,
      },
      850
    );
  });
  $(".linkNav").click(function (e) {
    let linkHref = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(linkHref).offset().top,
      },
      850
    );
    e.preventDefault();
  });
});

window.addEventListener("scroll", stickyNav);
hamburgerIcon.addEventListener("click", menuFunction);
