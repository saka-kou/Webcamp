const trigger = document.querySelector(".footer-trigger");
const footer = document.querySelector(".footerWrap");
const canvas = document.querySelector(".userInfo");
const stamps = document.querySelectorAll(".stamp");

trigger.addEventListener("click", () => {
    footer.classList.toggle("translate");
});

let selectStamp = null;

stamps.forEach(stamp => {
    stamp.addEventListener("click", () => {
        selectStamp = stamp.src;
    });
});

canvas.addEventListener("click", (e) => {
    if (!selectStamp) return;
    const img = document.createElement("img");

    img.src = selectStamp;
    img.style.width = "51px";
    img.style.position = "absolute";

    img.style.left = e.offsetX - 30 + "px";
    img.style.top = e.offsetY - 30 + "px";

    canvas.appendChild(img);
});