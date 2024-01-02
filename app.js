const questions = document.querySelectorAll(".question");
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const answer = document.querySelectorAll(".answer");

questions.forEach((item,index) => {
  item.addEventListener("click", () => {
    
    plus[index].classList.toggle("hidden");
    minus[index].classList.toggle("hidden");
    answer[index].classList.toggle("hidden");

  });
});
