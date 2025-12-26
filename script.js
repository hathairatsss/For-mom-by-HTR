const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const goCardBtn = document.getElementById("goCardBtn");

goCardBtn.addEventListener("click", () => {
    // ซ่อนหน้าแรก
    page1.classList.add("hidden");

    // แสดงหน้าการ์ด
    page2.classList.remove("hidden");

    // เอฟเฟกต์หัวใจ
    for (let i = 0; i < 8; i++) {
        createHeart();
    }
});

// หัวใจลอย
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "20px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
}

// หิมะ
function createSnow() {
    const snow = document.createElement("div");
    snow.className = "snow";
    snow.innerHTML = "❄";
    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = (4 + Math.random() * 5) + "s";
    document.body.appendChild(snow);

    setTimeout(() => snow.remove(), 9000);
}

setInterval(createSnow, 350);
