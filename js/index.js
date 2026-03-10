const trigger = document.querySelector(".footer-trigger");
const footer = document.querySelector(".footerWrap");

trigger.addEventListener("click", () => {
    footer.classList.toggle("translate");
});