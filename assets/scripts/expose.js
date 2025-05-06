// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // Functionality to display appropriate image and sound
  let imgSelector = document.getElementById("horn-select");
  let hornImg = document.querySelector("img");
  let hornAudio = document.getElementsByClassName("hidden")[0];

  imgSelector.addEventListener('change', function() {
    let selectedValue = this.value;
    switch (selectedValue) {
      // Display 'no image' and no audio
      case "select":
        hornImg.src = "assets/images/no-image.png";
        hornAudio.src = "";
        break;
      case "air-horn":
        hornImg.src = "assets/images/air-horn.svg";
        hornAudio.src = "assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        hornImg.src = "assets/images/car-horn.svg";
        hornAudio.src = "assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        hornImg.src = "assets/images/party-horn.svg";
        hornAudio.src = "assets/audio/party-horn.mp3";
        break;
    }
  });

  // Play the audio with appropriate volume when pressing the Play Sound button
  let playButton = document.querySelector("button");
  let volumeControls = document.querySelector("div#volume-controls input");
  let jsconf = new JSConfetti();
  playButton.addEventListener('click', function () {
    hornAudio.volume = volumeControls.value / 100;
    hornAudio.play();
    if (imgSelector.value == "party-horn") {
      jsconf.addConfetti();
    }
  });

  // Allow the volume bar to change volume, and have the volume img change with the value
  let volumeImg = document.querySelector("div#volume-controls img");
  volumeControls.addEventListener('input', function () {
    if (volumeControls.value == 0) {
      volumeImg.src = "assets/icons/volume-level-0.svg";
    }
    else if (volumeControls.value < 33) {
      volumeImg.src = "assets/icons/volume-level-1.svg";
    }
    else if (volumeControls.value < 67) {
      volumeImg.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volumeImg.src = "assets/icons/volume-level-3.svg";
    }
  });
}