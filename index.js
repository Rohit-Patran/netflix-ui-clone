const acc = document.querySelectorAll(".accordion");
const panel = document.querySelectorAll(".panel");
const image = document.querySelector(".image-section");

let accArray = Array.from(acc);
for (let i = 0;i < accArray.length;i++)
{
        accArray[i].addEventListener("click",()=>{
        panel[i].classList.toggle("active");
    })
}