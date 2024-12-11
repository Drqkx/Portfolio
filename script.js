document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded successfully!");
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.backgroundColor = "#eaf6f6";
        });
        card.addEventListener("mouseleave", () => {
            card.style.backgroundColor = "#fff";
        });
    });
});
