fetch("./json/listaPost.json")
    .then(res => {
      if(!res.ok){
        throw new Error("Errore nel caricamento dei post");
      }
      return res.json();
    })
    .then(listaPost => {
          listaPost.forEach(post => {
            const articolo=document.createElement("article");
            const titolo=document.createElement("h2");
            const link=document.createElement("a");
            const anteprima=document.createElement("p");
            const logo=document.createElement("i");
            
            articolo.classList.add("Blog");
            
            titolo.classList.add("TestoBlog");
            
            titolo.textContent=post.title;
            
            anteprima.textContent=post.preview;
            
            anteprima.classList.add("anteprimaBlog");
            
            link.classList.add("linkBlog")
            
            link.href=`./blogs/${post.slug}.html`;
            
            link.appendChild(articolo);
            
            const pezzo = post.sfondo || "pawn";
            
            logo.classList.add("fa-regular", `fa-chess-${pezzo}`, "sfondoScacco");
            
            articolo.appendChild(logo);
            
            articolo.appendChild(titolo);
            
            articolo.appendChild(anteprima);
            
            document.querySelector(".Posts").appendChild(link);
          });
    }).catch(error => {
      document.querySelector(".Posts").textContent = "I Contenuti non sono disponibili";
    });