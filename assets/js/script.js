let arrowButtons = document.querySelectorAll(".arrow-btn");

arrowButtons.forEach((button) => {
  button.addEventListener("click", function () {
    let faqItem = button.closest(".faq-item");
    let faqText = faqItem.querySelector(".faq-text");
    faqText.classList.toggle("active");
  });
});

let nav = document.querySelector("nav ul");

function toggleNav() {
  nav.classList.toggle("active");
}
