function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "❄"; // Bisa diganti dengan karakter salju lain

    document.body.appendChild(snowflake);

    // Atur posisi awal secara acak
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Kecepatan jatuh acak
    snowflake.style.opacity = Math.random();

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 200);


// Fungsi untuk toggle menu navigasi di HP
function toggleMenu() {
    let menu = document.getElementById("nav-menu");
    menu.classList.toggle("show");
}

document.addEventListener("click", function (event) {
    let menu = document.getElementById("nav-menu");
    let menuToggle = document.querySelector(".menu-toggle");

    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove("show");
    }
});
