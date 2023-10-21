// *======================================================================================
// function scrollUpProject() {
//   const scroll = document.getElementById("scroll");

//   console.log(scroll);

//   window.onscroll = () => {
//     if (window.scrollY > 200) {
//       document
//         .querySelector(".show-scroll")
//         .classList.remove("show-scroll--hide");
//     } else {
//       document.querySelector(".show-scroll").classList.add("show-scroll--hide");
//     }
//   };

//   scroll.onclick = () => {
//     window.scrollTo(0, 0);
//   };
// }
// scrollUpProject();
// *========================================================================================

// ! Kнопка прикольна

function scrollUpProject() {
  const offset = 100;
  const scrollUp = document.querySelector(".scroll-up");
  const scrollUpPath = document.querySelector(".scroll-up__path");
  const pathLength = scrollUpPath.getTotalLength();

  scrollUpPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
  scrollUpPath.style.transition = "stroke-dashoffset 20ms";

  const getTop = () => window.scrollY || document.documentElement.scrollTop;

  // Оновити dashoffset
  const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = pathLength - (getTop() * pathLength) / height;

    scrollUpPath.style.strokeDashoffset = dashoffset;
  };

  // При прокручуванні
  window.addEventListener("scroll", () => {
    updateDashoffset();

    if (getTop() > offset) {
      scrollUp.classList.add("scroll-up--active");
    } else {
      scrollUp.classList.remove("scroll-up--active");
    }
  });

  // При кліку
  scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

scrollUpProject();
