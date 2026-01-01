document.querySelectorAll(".cardFormazione").forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector(".ditoPuntato").classList.toggle("giraDito")
    card.classList.toggle("altezzaCard")
  });
});

document.querySelectorAll(".cardProgetto").forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector(".ditoPuntato").classList.toggle("giraDito")
    card.classList.toggle("altezzaCard")
  });
});