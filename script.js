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

fetch("/Components/nav.html")
    .then(res => res.text())
    .then(data => { document.getElementById("nav").innerHTML = data; })
    .then(() => {
        const checkbox = document.querySelector("#menu");
        const navList = document.querySelector(".navList");
        const label = document.querySelector(".label");
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                navList.style.display = "flex";
                label.classList.remove("fa-bars")
                label.classList.add("fa-xmark")
            } else {
                navList.style.display = "none";
                label.classList.remove("fa-xmark")
                label.classList.add("fa-bars")
            }
        })
    })
    .then(() => {
        const pageName = location.href.split("/").pop();
        const navLinks = document.querySelectorAll(".navLink");
        navLinks.forEach((link) => {
            if (link.getAttribute("href") == pageName) {
                link.classList.add("activeNavLink")
            } else if (pageName == "services.html" || pageName == "techSupport.html" || pageName == "training.html") {
                document.querySelector(".dropdown a").classList.add("activeA");
            }
        })
    })

const toTop = document.querySelector("#toTop");
document.addEventListener("scroll", () => {
    scrollY > 300 ? toTop.style.display = "grid" : toTop.style.display = "none";
});

toTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});




const bgLayers = document.querySelectorAll('.mainSection .bgLayer');
const leftBtn = document.getElementById("mainImgLeft");
const rightBtn = document.getElementById("mainImgRight");
let currentBg = 0;
let intervalId;

bgLayers[currentBg].classList.add('active');

function updateActiveSlide(newIndex) {
    bgLayers.forEach(layer => layer.classList.remove('active'));
    currentBg = newIndex;
    bgLayers[currentBg].classList.add('active');
}

function startAutoSlide() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        updateActiveSlide((currentBg + 1) % bgLayers.length);
    }, 10000);
}

startAutoSlide();

rightBtn.addEventListener("click", () => {
    if (currentBg < bgLayers.length - 1) {
        updateActiveSlide(currentBg + 1);
        startAutoSlide();
    } else if (currentBg = 4) {
        updateActiveSlide(0);
        startAutoSlide();
    }
});

leftBtn.addEventListener("click", () => {
    if (currentBg > 0) {
        updateActiveSlide(currentBg - 1);
        startAutoSlide();
    } else if (currentBg == 0) {
        updateActiveSlide(4);
    }
});