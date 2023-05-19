const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;

   
    function changeSlide(newIndex) {
        if (newIndex < 0) {
            newIndex = slides.length - 1;
        } else if (newIndex >= slides.length) {
            newIndex = 0;
        }

        document.querySelectorAll(".dot")[currentIndex].classList.remove("dot_selected");

        currentIndex = newIndex;
        console.log(currentIndex); 
        document.querySelector("#banner .banner-img").src = slides[currentIndex].image;
        document.querySelector("#banner p").innerHTML = slides[currentIndex].tagLine;
        document.querySelectorAll(".dot")[currentIndex].classList.add("dot_selected");
    }

    document.querySelector(".arrow_left").addEventListener("click", function () {
        changeSlide(currentIndex - 1);
    });

    document.querySelector(".arrow_right").addEventListener("click", function () {
        changeSlide(currentIndex + 1);
    });

    document.querySelectorAll(".dot").forEach(function (dot, index) {
        dot.addEventListener("click", function () {
            changeSlide(index);
        });
    });
});
