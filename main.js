
let buttons = document.querySelector(".nav").getElementsByTagName("button")
let previouslyClicked = buttons[0]
previouslyClicked.style.color = "lime"
let right = document.querySelector(".right")

for (const button of buttons) {

    button.addEventListener("click", () => {
        previouslyClicked.style.color="white"
        button.style.color = "lime"
        previouslyClicked=button
    })

}

function loadpage(pagepath){
    fetch(pagepath)
    .then(res=>res.text())
    .then(html=>document.querySelector(".aboutMe").innerHTML= html)
    .catch(error => {
      document.querySelector('.aboutMe').innerHTML = "<p>Couldn't load the section.</p>";
      console.error("Load error:", error);
    });
}
window.onload = () => {
  loadPage('sections/about.html');
};
