// ToTop Show/Hide

const toTop = document.querySelector("#toTop");
document.addEventListener("scroll", () => {
    scrollY > 300 ? toTop.style.display = "grid" : toTop.style.display = "none";
});

toTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Home Page Slides

const pageName = location.href.split("/").pop();

if (pageName == "" || pageName == "index.html") {
    document.addEventListener('DOMContentLoaded', function () {
        var swiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.carouselRight',
                prevEl: '.carouselLeft',
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            speed: 1500
        });
    });
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}