document.addEventListener("DOMContentLoaded", function() {
const questionElement = document.getElementById("question"); 
const answerElement = document.getElementById('answer'); 
const submitAnswerButton = document.getElementById("submitAnswer");
const questions=[
"What is your favorite color?",
"What is your favorite food?",
"What is your favorite hobby?",
"What is your favorite movie?",
"What is your favorite book?"
];
function displayRandomQuestion() { 
 const randomIndex = Math.floor(Math.random()*questions.length); 
 questionElement.textContent = questions[randomIndex];
}
submitAnswerButton.addEventListener('click', function() {
const answer = answerElement.value; 
console.log("Submitted answer:", answer);
answerElement.value = ''; 
displayRandomQuestion();
});
displayRandomQuestion();
});
 
