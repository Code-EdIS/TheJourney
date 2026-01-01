document.querySelectorAll(".cardFormazione").forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle("altezzaCard")
    card.querySelector(".ditoPuntato").classList.toggle("giraDito")
  });
});

document.querySelectorAll(".cardProgetto").forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle("altezzaCard")
    card.querySelector(".ditoPuntato").classList.toggle("giraDito")
  });
});