document.querySelectorAll(".cardGenerale").forEach(card => {
  const dito = card.querySelector(".ditoPuntato");
  const closedHeight = card.offsetHeight;

  card.addEventListener("click", () =>{
    const isOpen = card.classList.contains("aperta");
  if(!isOpen){
    card.classList.add("aperta");
    card.style.height = card.scrollHeight + "px";
    dito.classList.add("giraDito");
  }else{
    card.style.height = closedHeight + "px";
    dito.classList.remove("giraDito");
    
  card.addEventListener("transitionend", () =>
    card.classList.remove("aperta"), {once: true});
  }
  });
});