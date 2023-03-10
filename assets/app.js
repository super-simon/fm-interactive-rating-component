const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const rate = formData.get("rate");
  const resultPlace = document.getElementById("result-place");
  resultPlace.textContent = rate;

  const surveyBlock = document.getElementById("survey");
  const resultBlock = document.getElementById("result");
  surveyBlock.style.display = "none";
  resultBlock.style.display = "flex";
});
