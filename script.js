const txtInput = document.querySelector("#txt-input");
const translateBtn = document.querySelector("#translate-btn");
const outputBox = document.querySelector("#output");
const apiUrl = "https://api.funtranslations.com/translate/minion.json?text=";
// const testApi = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=";

translateBtn.addEventListener("click", translate);

function translate() {
  let text = txtInput.value;
  let url = apiUrl + text;
  getTranslation(url);
}

function getTranslation(url) {
  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      outputBox.innerHTML = result.contents.translated;
    })
    .catch(() => {
      alert("Somthing went wrong!\n Try again after sometime");
    });
}
