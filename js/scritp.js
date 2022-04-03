const slider = document.getElementsByClassName('banner')[0];
const tabs = document.getElementsByClassName('tab')//.map(item => item.addEventListener("click", changeBanner()));
let sliderNumber =0;
console.log(tabs[2]);

function  changeBanner(number) {
    sliderNumber = number;
    return slider.style.backgroundImage = `url(./img/banner${number}.svg)`;
}

for (let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener("click", () => changeBanner(i));
}
function swapBanner(dir){
    if (dir == "right"){
        (sliderNumber == 3) ?  sliderNumber = -1 : sliderNumber = sliderNumber;
        changeBanner(sliderNumber+1)
    } 
    if (dir == "left"){
        (sliderNumber == 0) ?  sliderNumber = 4 : sliderNumber = sliderNumber;
        changeBanner(sliderNumber-1)
    } 
}
const arrowLeft = document.getElementById('arrow-left').addEventListener("click", () => swapBanner("left"));
const arrowRight = document.getElementById('arrow-right').addEventListener("click", () => swapBanner("right"));
