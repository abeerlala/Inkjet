// Load Navigation Bar On All Pages

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
        const homeLink = document.querySelector(".navLink");
        navLinks.forEach((link) => {
            if (link.getAttribute("href") == pageName) {
                link.classList.add("activeNavLink")
            } else if (pageName == "services.html" || pageName == "techSupport.html" || pageName == "training.html") {
                document.querySelector(".serviceDrop").classList.add("activeA");
            } else if (pageName == "") {
                homeLink.classList.add("activeNavLink")
            } else if (
                pageName == "products.html" ||
                pageName == "uv.html" ||
                pageName == "dtf.html" ||
                pageName == "ecoSolvent.html" ||
                pageName == "sublimation.html" ||
                pageName == "laser.html" ||
                pageName == "plotter.html" ||
                pageName == "heatTransfer.html"
            ) {
                document.querySelector(".productDrop").classList.add("activeA");
                document.querySelector(".dropbtnSpecial").classList.add("activeATwo");
            }
        })
    })