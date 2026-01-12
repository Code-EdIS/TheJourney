const form = document.querySelector(".Contattami");
const pulsante = document.querySelector(".datiContatto");

form.addEventListener("submit", (e) => {
          e.preventDefault();
          
          pulsante.textContent="invio in corso...";
          pulsante.disabled = true;
          
          const data = new FormData(form);
          
          fetch("https://formspree.io/f/xpwynpga", {
            method: "POST",
            body: data,
            headers: {
              "Accept": "application/json"
            }
          }).then(res => {
            if(res.ok){
              pulsante.textContent="ok";
              form.reset();
              }else{pulsante.textContent="errore di invio! riprovare"}
            }
          ).catch(() => {
            pulsante.textContent="errore di connessione";
          }).finally(() => {
            pulsante.disabled = false;
            pulsante.textContent="invia"
          }
          )
});

const tooltip = document.querySelector(".domanda");

const didascalia = document.querySelector(".esempi");

function apri(){
  didascalia.style.height = didascalia.scrollHeight + "px";
  didascalia.style.border = "1px solid black";
}

function chiudi(){
  didascalia.style.height = "0px";
  didascalia.style.border = "none";
}

tooltip.addEventListener("focus", apri);
tooltip.addEventListener("blur", chiudi);

tooltip.addEventListener("mouseenter", apri);
tooltip.addEventListener("mouseleave", chiudi);
