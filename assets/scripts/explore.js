// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const selectElement = document.querySelector("#voice-select");
  const textElement = document.querySelector("#text-to-speak");
  const button = document.querySelector("button");
  const faceImage = document.querySelector("#explore img")

  let voices = [];

  function populateVoiceList() {
    selectElement.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices = synth.getVoices();

    voices.forEach(voice => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      if(voice.default) option.textContent += " - DEFAULT";
      option.setAttribute("data-name", voice.name);
      selectElement.appendChild(option);
    });
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener("click", (event) => {
    event.preventDefault();
    const text = textElement.value.trim();
    if(!text) return;

    const utterThis = new SpeechSynthesisUtterance(text);
    const selectedVoiceName = selectElement.selectedOptions[0].getAttribute("data-name");

    const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);
    if (selectedVoice) utterThis.voice = selectedVoice;
    console.log("Speaking with voice:", utterThis.voice);

    utterThis.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };

    utterThis.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    utterThis.onerror = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    synth.speak(utterThis);
  });
}