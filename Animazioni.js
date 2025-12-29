const formazioneDropdownCs = document.querySelector(".cardFormazioneCs");
const formazioneDropDownFrontEnd = document.querySelector(".cardFormazioneFrontEnd");
const formazioneDropDownIa = document.querySelector(".cardFormazioneIa");

formazioneDropdownCs.addEventListener('click', () => {
  formazioneDropdownCs.classList.toggle("altezzaCardCs");
});

formazioneDropDownFrontEnd.addEventListener('click', () => {
  formazioneDropDownFrontEnd.classList.toggle("altezzaCardFrontEnd");
});

formazioneDropDownIa.addEventListener('click', () => {
  formazioneDropDownIa.classList.toggle("altezzaCardIa");
});