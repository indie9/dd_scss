//получаем доступ к баннеру и табам
const slider = document.getElementsByClassName('banner')[0];
const tabs = document.getElementsByClassName('tab');
//переменная содержит номер тукущего слайда
let sliderNumber =0;

//функция меняет отображаемы слайд на указанный в аргументе
function  changeBanner(number) {
    //если номер слайда превышает длинну карусели перекидываем на начало и наоборот
    ( number > tabs.length-1) ?  sliderNumber = 0 : ( number < 0) ?  sliderNumber = tabs.length-1 : sliderNumber = number;
    cnahgeTabColor(sliderNumber)
    return slider.style.backgroundImage = `url(./img/banner${sliderNumber}.svg)`;
}

//функция задает стили для активного таба, вызывается каждый раз при смене слайдера
function cnahgeTabColor(numb){
    for (let i = 0; i < tabs.length; i++){
        tabs[i].removeAttribute("style");
    }
    tabs[numb].style.backgroundColor = '#34ACA7';
    tabs[numb].style.color = '#FFFFFF';
}

//добавляем слушатель всем табам
for (let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener("click", () => changeBanner(i));
}

//функция в зависимости от переданого направления показывает либо прошлый слайд либо следующий
function swapBanner(dir){
    if (dir == "right"){    
        changeBanner(sliderNumber+1)
    } 
    if (dir == "left"){
        changeBanner(sliderNumber-1)
    } 
}
//получаем доступ к стрелкам и вешаем на них слушателя
const arrowLeft = document.getElementById('arrow-left')
    .addEventListener("click", () => swapBanner("left"));

const arrowRight = document.getElementById('arrow-right')
    .addEventListener("click", () => swapBanner("right"));

