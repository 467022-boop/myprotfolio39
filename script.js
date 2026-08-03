// Loader
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// Back To Top
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
        navMenu.style.position = "absolute";
        navMenu.style.top = "75px";
        navMenu.style.right = "20px";
        navMenu.style.background = "#ffffff";
        navMenu.style.padding = "20px";
        navMenu.style.borderRadius = "15px";
        navMenu.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";
    }
});

// Animation เมื่อเลื่อนหน้าจอ
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".card,.timeline-box,.glass,.gallery img").forEach(el=>{
    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition=".8s";
    observer.observe(el);
});
