let hamburgerIcon = document.querySelector(".ham");
let menuItems = document.querySelector(".menuItems");
let nav = document.querySelector("nav");
let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let bar3 = document.querySelector(".bar3");
let menuShow = false;
const menuFunction = () => {
  let linkClicked = false;
  if (!menuShow) {
    menuItems.classList.add("close");
    menuItems.classList.add("active");
    bar1.classList.add("activeBar1");
    bar2.classList.add("activeBar2");
    bar3.classList.add("activeBar3");
    bar1.style.backgroundColor = "white";
    bar2.style.backgroundColor = "white";
    bar3.style.backgroundColor = "white";

    menuShow = true;
  } else {
    menuItems.classList.add("close");
    menuItems.classList.remove("active");
    bar1.classList.add("closeBars");
    bar2.classList.add("closeBars");
    bar3.classList.add("closeBars");
    bar1.classList.remove("activeBar1");
    bar2.classList.remove("activeBar2");
    bar3.classList.remove("activeBar3");
    bar1.style.backgroundColor = "#7392b7";
    bar2.style.backgroundColor = "#7392b7";
    bar3.style.backgroundColor = "#7392b7";

    menuShow = false;
  }
};
let sticky = nav.offsetTop;
const stickyNav = () => {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

window.addEventListener("scroll", stickyNav);
hamburgerIcon.addEventListener("click", menuFunction);
