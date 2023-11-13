const mainCard = document.querySelector(".card")
const thanksCard = document.querySelector(".thankyou-card")
const submitButton = document.getElementById("btn")
const rating = document.getElementById("rating")
const number = document.querySelectorAll(".num")


submitButton,addEventListener("click", () => {
    thanksCard.classList.remove("hidden")
    mainCard.style.display = "none"
})

number.forEach((rate) => {
    rate.addEventListener ("click", () => {
        rating.innerHTML = rate.innerHTML 
    })
})