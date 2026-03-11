const trigger = document.querySelector(".footer-trigger");
const footer = document.querySelector(".footerWrap");
const canvas = document.querySelector(".userInfo");
const stamps = document.querySelectorAll(".stamp");
const body = document.querySelector("body");
const userWrap = document.querySelector(".userWrap")
const iframe = document.querySelector("main");

console.log(canvas);


trigger.addEventListener("click", () => {
    footer.classList.toggle("translate");
});

let selectStamp = null;

stamps.forEach(stamp => {
    stamp.addEventListener("click", () => {
        console.log("選択");
        selectStamp = stamp.src;
    });
});

canvas.addEventListener("click", (e) => {
    console.log("押した");

    if (!selectStamp) return;
    const img = document.createElement("img");

    img.src = selectStamp;
    img.style.width = "51px";
    img.style.position = "absolute";
    img.style.zIndex = "10";

    img.style.left = e.offsetX - 30 + "px";
    img.style.top = e.offsetY - 30 + "px";

    canvas.appendChild(img);
    console.log("配置完了");

});