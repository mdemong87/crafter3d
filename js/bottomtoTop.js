// Get the button
const backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when user scrolls down 200px
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// Scroll smoothly to top when clicked
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
