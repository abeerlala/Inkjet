// Nav Logic

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

const pageName = location.href.split("/").pop();
const navLinks = document.querySelectorAll(".navLink");
const homeLink = document.querySelector(".navLink");

navLinks.forEach((link) => {
    if (link.getAttribute("href") == pageName) {
        link.classList.add("activeNavLink")
    } else if (pageName == "services.html" || pageName == "techSupport.html" || pageName == "training.html") {
        document.querySelector(".dropdown a").classList.add("activeA");
    } else if (pageName == "") {
        homeLink.classList.add("activeNavLink")
    }
})

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

// Tabs Functionality 

const tabs = document.querySelectorAll(".tab");
const products = document.querySelectorAll(".product");
let category = "All";

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("activeTab"));
        tab.classList.add("activeTab");
        category = tab.id;
        products.forEach(product => {
            const productCategory = product.dataset.category;

            if (category === "All" || productCategory === category) {
                product.style.display = "flex";
            } else {
                product.style.display = "none";
            }
        });
    });
});

const allProducts = document.querySelectorAll(".product");

allProducts.forEach(product => {
    const name = product.querySelector("h2").innerText;
    product.querySelector("a").href = product.querySelector("a").href + " "+ name ;
});