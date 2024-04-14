const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yes8tn = document.querySelector(".yes-btn");
const no8tn = document.querySelector(".no-btn");

yes8tn.addEventListener("click" , () => {
    question.innerHTML = "AAAAA, THANK UU BABEE (still tyring AHAHA)";
    gif.src=
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gifyou.webp"
});

no8tn.addEventListener("mouseover" , () => {
    const no8tnRect = no8tn.getBoundingClientRect();
    const maxX = window.innerWidth - no8tnRect.width;
    const maxY = window.innerHeight - no8tnRect.height;

    const randomX = Math.floor(Math.random () * maxX);
    const randomY = Math.floor(Math.random () * maxY);

    no8tn.style.left = randomX + "px";
    no8tn.style.left = randomY + "px";
}
)