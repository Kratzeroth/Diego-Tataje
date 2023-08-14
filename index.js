const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const fullImg = document.getElementById("full-img-box");
const img = document.getElementById("image-full");
const close  = document.querySelector(".close-img");

close.addEventListener("click",closeImg);


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});



navLinks.forEach(link => {
    link.addEventListener('click', () =>
        document.body.classList.remove('nav-open'));
});


function closeImg(){
    fullImg.style.display="none";
    document.body.style.overflow = "";
}


function openImg(reference){
    fullImg.style.display = "flex";
    
    img.src = reference;
document.body.style.overflow = "hidden";
}

window.addEventListener("keydown",(event) => {
    if(event.key == "Escape"){
        closeImg();
    }
})



