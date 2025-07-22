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

// Product Cards Logic

const images = document.querySelectorAll(".imageProduct img");

images.forEach(img => {
    img.addEventListener("click", () => {
        const src = img.src;
        window.open(src)
    });
});

const productCard = document.querySelectorAll(".productCard");

productCard.forEach(card => {
    const img = card.querySelector("img");
    const a = card.querySelector("a");
    a.href = `${a.href}Hello, I’m interested in the ${img.alt}. Can you please share the price? Kindly send me the price and availability of the ${img.alt}`;
});