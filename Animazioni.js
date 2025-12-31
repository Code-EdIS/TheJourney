document.querySelectorAll(".cardFormazione").forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle("altezzaCard")
  });
});