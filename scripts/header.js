var headerBg = document.getElementsByClassName("header__bg");
let i = 1;

function changeHeaderBg() {
  console.log("header changing!");
  console.log(i);

  if (i == 0) {
    headerBg[i].style.opacity = 0;
    i++;
    headerBg[i].style.opacity = 1;
  } else if (i < headerBg.length) {
    headerBg[i - 1].style.opacity = 0;
    headerBg[i].style.opacity = 1;
    i++;
  } else if (i == headerBg.length) {
    headerBg[i - 1].style.opacity = 0;
    i = 0;
    headerBg[i].style.opacity = 1;
  }
}
