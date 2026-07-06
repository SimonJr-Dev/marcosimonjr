// Scroll Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach((section) => {

    section.classList.add("hidden");
    observer.observe(section);

});

// Active Navigation

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// Smooth Hero Image Animation

const heroImage = document.querySelector(".hero-right img");

let direction = 1;

setInterval(() => {

    heroImage.style.transform = `translateY(${direction * 10}px)`;

    direction *= -1;

}, 1500);