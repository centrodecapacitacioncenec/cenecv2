const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    dots.forEach(dot=>{
        dot.classList.remove("active-dot");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active-dot");
}

document.querySelector(".next").addEventListener("click",()=>{

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);

});

document.querySelector(".prev").addEventListener("click",()=>{

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    showSlide(current);

});

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        current = index;
        showSlide(current);

    });

});

setInterval(()=>{

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);

},3000);
/* biblioteca*/
const sliderb = document.querySelector(".biblioteca-slider");

const nextBtn = document.querySelector(".next1");
const prevBtn = document.querySelector(".prev1");

nextBtn.addEventListener("click", () => {

    sliderb.scrollBy({
        left: 320,
        behavior: "smooth"
    });

});

prevBtn.addEventListener("click", () => {

    sliderb.scrollBy({
        left: -320,
        behavior: "smooth"
    });

});
/* PASANTIA*/
const sliderb2 = document.querySelector(".biblioteca-slider2");

const nextBtn2 = document.querySelector(".next2");
const prevBtn2 = document.querySelector(".prev2");

nextBtn2.addEventListener("click", () => {

    sliderb2.scrollBy({
        left: 320,
        behavior: "smooth"
    });

});

prevBtn2.addEventListener("click", () => {

    sliderb2.scrollBy({
        left: -320,
        behavior: "smooth"
    });

});
