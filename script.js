const url = "https://the-trivia-api.com/v2/questions";
let i = 0;
let question;
let checked = false;
let cAns;
let ans;
let count = 0;
let a;

let fetchingUrl = () => {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (i < 10) {
        console.log(data);
        document.getElementById("question").innerText =
          `${i + 1}` + ". " + data[i].question.text;
        document.getElementById("option1name").innerText =
          data[i].incorrectAnswers[0];
        document.getElementById("option2name").innerText =
          data[i].incorrectAnswers[1];
        document.getElementById("option3name").innerText =
          data[i].incorrectAnswers[2];
        cAns = data[i].correctAnswer;
        document.getElementById("option4name").innerText =
          data[i].correctAnswer;
      } else {
        document.getElementById("mainContainer").style.display = "none";
        document.body.innerText = "Refresh the Page to Restart the quiz 🔃";

        display();
      }
    });
};
fetchingUrl();

function display() {
  alert(
    `You Scored ${count} out of 10 points. Please Refresh to Restart the quiz`
  );
}

let optionsDiv = document.getElementById("allOptions");
optionsDiv.addEventListener("click", function (e) {
  checked = true;
  a = e.target.id;
  ans = document.querySelector(`.${a}`).innerText;
});

let btn = document.getElementById("submitBtn");
btn.addEventListener("click", () => {
  if (ans === cAns) {
    ++count;
  }
  if (checked) {
    ++i;
    fetchingUrl();
    checked = false;

    console.log(cAns);
  } else {
    alert("Please select one option, then proceed");
  }
  document.getElementById(`${a}`).checked = false;
});

// console.log(count);
