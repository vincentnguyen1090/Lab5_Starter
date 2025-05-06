// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const img = document.querySelector("#expose img");
  const soundIcon = document.querySelector("#volume-controls img");
  const selectElement = document.querySelector("#horn-select");
  const audioElement = document.querySelector("audio.hidden")
  const volumeElement = document.querySelector("#volume-controls input");
  const button = document.querySelector("button")
  const jsConfetti = new JSConfetti();

  selectElement.addEventListener("change", (event) => {
    const selectedHorn = event.target.value;

    if (selectedHorn === "air-horn") {
        img.src = "assets/images/air-horn.svg";
        audioElement.src = "assets/audio/air-horn.mp3";
    } else if (selectedHorn === "car-horn") {
        img.src = "assets/images/car-horn.svg";
        audioElement.src = "assets/audio/car-horn.mp3";
    } else if (selectedHorn === "party-horn") {
        img.src = "assets/images/party-horn.svg";
        audioElement.src = "assets/audio/party-horn.mp3";
    }
  });

  volumeElement.addEventListener("input", (event) => {
    const volumeInput = event.target.value;
    audioElement.volume = volumeInput / 100;

    const volume = volumeInput;
    if(volume == 0) {
      soundIcon.src = "assets/icons/volume-level-0.svg";
    } else if (volume >= 1 & volume <= 32) {
      soundIcon.src = "assets/icons/volume-level-1.svg";
    } else if (volume >= 33 & volume <= 66) {
      soundIcon.src = "assets/icons/volume-level-2.svg";
    } else if (volume >= 67) {
      soundIcon.src = "assets/icons/volume-level-3.svg";
    }
  });

  button.addEventListener("click", (event) => {
    if(selectElement.value !== "select") {
      audioElement.play();

      if(selectElement.value == "party-horn") {
        jsConfetti.addConfetti();
      }
    }
  });
}
