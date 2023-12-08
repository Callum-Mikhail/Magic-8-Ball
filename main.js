// Magic 8 Ball
document.getElementById("btn").addEventListener("click", btnClicked);

// btn function
function btnClicked() {
  let question = document.getElementById("question").value.toLowerCase;

  let randNum = Math.random();
  console.log(randNum);
  if (question === "does an 8 ball really work?") {
    document.getElementById("answer").innerHTML = `
    How dare you doubt me...
    `;
  } else if (question === "is javascript awesome?") {
    document.getElementById("answer").innerHTML = `
    Of Course!
  `;
  } else if (question === "") {
    document.getElementById("answer").innerHTML = `
    Please ask a question...
  `;
  } else if (randNum < 0.2) {
    document.getElementById("answer").innerHTML = `
  Without a Doubt.
  `;
  } else if (randNum >= 0.2 && randNum < 0.4) {
    document.getElementById("answer").innerHTML = `
  As I see it, yes.
  `;
  } else if (randNum >= 0.4 && randNum < 0.6) {
    document.getElementById("answer").innerHTML = `
  Concentrate and ask again.
  `;
  } else if (randNum >= 0.6 && randNum < 0.8) {
    document.getElementById("answer").innerHTML = `
  Don't count on it.
  `;
  } else if (randNum >= 0.8) {
    document.getElementById("answer").innerHTML = `
  Outlook not so good.
  `;
  }
}
