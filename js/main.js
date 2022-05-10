/* swiper */
var swiper = new Swiper(".mySwiper", {});

chart 
const chartIco = document.querySelector(".chart");
chartIco.addEventListener("click", chartHandler);

const Mychart = document.querySelector(".Chart");
function chartHandler(e) {
    e.preventDefault();
    Mychart.classList.add("ChartUp");
};


