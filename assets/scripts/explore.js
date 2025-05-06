// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const selectElement = document.querySelector("#voice-select");
  const textElement = document.querySelector("#text-to-speak");
  const button = document.querySelector("button");

  let voices = [];

  function populateVoiceList() {
    selectElement.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices = synth.getVoices();

    for(let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if(voices[i].default) {
        option.textContent += " - DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      selectElement.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener("click", (event) => {
    const utterThis = new SpeechSynthesisUtterance(textElement.value);
    console.log(`${textElement.value}`);
    const selectedOption = selectElement.selectedOptions[0].getAttribute("data-name");
    for(let i = 0; i < voices.length; i++) {
      if(voices[i].name == selectedOption) {
        utterThis.voice = voices[i];
      }
    } 
    console.log("Speaking with voice:", utterThis.voice);
    synth.speak(utterThis);
  });
}