document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to my portfolio website!");

    // Dark Mode Toggle
    const darkModeButton = document.getElementById("darkModeToggle");
    darkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});