const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let audio = new Audio("./src/tunes/a.wav");
let mapedKeys = [];

const playTune = (key) => {
  audio.src = `./src/tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");

  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

const handleVolume = (volume) => {
  audio.volume = volume.target.value;
};

const showHideKeys = () => {
  pianoKeys.forEach((key) => {
    key.classList.toggle("hide");
  });
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (event) => {
  if (mapedKeys.includes(event.key)) {
    playTune(event.key);
  }
});

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);
