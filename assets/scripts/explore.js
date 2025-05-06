// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // When page loads, populate selection with available voices
  const synth = window.speechSynthesis;

  const inputTxt = document.getElementById("text-to-speak");
  const voiceSelect = document.querySelector("select");
  const playButton = document.querySelector("button");

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // Upon pressing the play button, utter the specified text and change img
  playButton.addEventListener("click", () => {
    let utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    // Update the smiling photo to speaking
    let faceImg = document.querySelector("img");
    faceImg.src = "assets/images/smiling-open.png";
    faceImg.alt = "Smiling open face"
    utterThis.onend = (event) => {
      faceImg.src = "assets/images/smiling.png";
    } 

  });
}