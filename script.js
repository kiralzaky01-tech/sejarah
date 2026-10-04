
/* =========================================
   MENU MOBILE
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* =========================================
   TUTUP MENU SETELAH LINK DIKLIK
========================================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* =========================================
   ANIMASI SAAT SCROLL
========================================= */

const revealElements = document.querySelectorAll(
    ".article-section, .article-image, .map-container, .person, .conclusion"
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(function (element) {

    observer.observe(element);

});


/* =========================================
   EFEK NAVBAR SAAT SCROLL
========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        header.style.background = "rgba(24, 22, 19, 0.99)";

    } else {

        header.style.background = "rgba(30, 28, 24, 0.96)";

    }

});


/* =========================================
   GAMBAR ERROR
   Menampilkan placeholder jika gambar
   lokal belum dimasukkan.
========================================= */

const images = document.querySelectorAll("img");

images.forEach(function (image) {

    image.addEventListener("error", function () {

        if (image.src.includes("images/")) {

            image.style.display = "none";

            const placeholder = document.createElement("div");

            placeholder.className = "image-placeholder";

            placeholder.innerHTML = `
                <span>GAMBAR SEJARAH</span>
                <small>
                    Masukkan gambar ke folder images
                </small>
            `;

            image.parentElement.insertBefore(
                placeholder,
                image
            );

        }

    });

});

