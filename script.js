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