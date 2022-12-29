const openNav = document.querySelector(".open");
const closeNav = document.querySelector(".close");
const nav = document.querySelector("nav");
openNav.addEventListener("click", function() {
    this.style.display = "none";
    closeNav.style.display = "block";
    nav.style.display = "block";
});
closeNav.addEventListener("click", function() {
    this.style.display = "none";
    nav.style.display = "none";
    openNav.style.display = "block";
});

const dowm = document.querySelector(".down");
dowm.addEventListener("click", function(){
    this.children[1].style.display = "block";
});

const header = document.querySelector("header");
window.addEventListener("scroll", function (){
    if(this.scrollY == 0) {
        header.style.boxShadow = "none";
    } else if (this.scrollY > 500) {
        header.style.boxShadow = "0 0 5px #ddd";
    }
});

// shower
const shower = document.querySelector(".shower div");
shower.addEventListener("click", function () {
    if(this.children[0].classList.contains("left")) {
        this.children[0].style.left = "25px";
        this.children[0].classList.remove("left");
        this.children[0].classList.add("right");
    } else if(this.children[0].classList.contains("right")) {
        this.children[0].style.left = "5px";
        this.children[0].classList.remove("right");
        this.children[0].classList.add("left");
    }
});


//
const showOptions = Array.from(document.querySelectorAll(".show-options span"));
showOptions.forEach(btn => {
    btn.addEventListener("click", function () {
        for(let i = 0; i < showOptions.length; i++) {
            showOptions[i].classList.remove("active");
        }
        this.classList.add("active");
    });
});