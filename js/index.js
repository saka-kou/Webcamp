const canvas = document.getElementById("canvas")
const addButtons = document.querySelectorAll(".addStamp")

let activeStamp = null
let offsetX = 0
let offsetY = 0

// スタンプ追加
addButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        const stamp = document.createElement("img")
        stamp.src = btn.src
        stamp.classList.add("stamp")

        stamp.dataset.scale = 1
        stamp.dataset.rotate = 0

        stamp.style.left = "100px"
        stamp.style.top = "100px"

        updateTransform(stamp)

        canvas.appendChild(stamp)

        enableControls(stamp)
    })
})


function enableControls(stamp) {

    // ドラッグ
    stamp.addEventListener("mousedown", (e) => {
        activeStamp = stamp
        offsetX = e.offsetX
        offsetY = e.offsetY
    })


    // ホイール拡大縮小 / 回転
    stamp.addEventListener("wheel", (e) => {
        e.preventDefault()

        let scale = Number(stamp.dataset.scale)
        let rotate = Number(stamp.dataset.rotate)

        if (e.shiftKey) {

            // 回転
            rotate += e.deltaY * 0.2

        } else {

            // 拡大縮小
            scale -= e.deltaY * 0.001

            if (scale < 0.3) scale = 0.3
            if (scale > 3) scale = 3
        }

        stamp.dataset.scale = scale
        stamp.dataset.rotate = rotate

        updateTransform(stamp)
    })


    // ダブルクリック削除
    stamp.addEventListener("dblclick", () => {
        stamp.remove()
    })
}


// transform更新
function updateTransform(stamp) {

    const scale = stamp.dataset.scale
    const rotate = stamp.dataset.rotate

    stamp.style.transform =
        `scale(${scale}) rotate(${rotate}deg)`
}



// ドラッグ移動
document.addEventListener("mousemove", (e) => {

    if (!activeStamp) return

    const rect = canvas.getBoundingClientRect()

    const x = e.clientX - rect.left - offsetX
    const y = e.clientY - rect.top - offsetY

    activeStamp.style.left = x + "px"
    activeStamp.style.top = y + "px"
})


// ドラッグ終了
document.addEventListener("mouseup", () => {

    if (!activeStamp) return

    checkOutside(activeStamp)

    activeStamp = null
})



// 画面外チェック
function checkOutside(stamp) {

    const rect = canvas.getBoundingClientRect()
    const sRect = stamp.getBoundingClientRect()

    if (
        sRect.right < rect.left ||
        sRect.left > rect.right ||
        sRect.bottom < rect.top ||
        sRect.top > rect.bottom
    ) {
        stamp.remove()
    }
}