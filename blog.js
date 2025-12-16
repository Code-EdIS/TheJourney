fetch("./BlogPost.json")
    .then(res => {
      if(!res.ok){
        throw new Error("Errore nel caricamento dei post");
      }
      return res.json;
    } )
    .then(BlogPost => {
          BlogPost.forEach(post => {
            const articolo=document.createElement("article");
            const titolo=document.createElement("h2");
            const link=document.createElement("a");
            
            articolo.classList.add("Blog");
            
            titolo.classList.add("TestoBlog");
            
            titolo.textContent=post.title;
            
            link.href=post.link;
            
            link.appendChild(articolo);
            
            articolo.appendChild(titolo);
            
            document.classList.add(".posts");
            document.querySelector(".Posts").appendChild(link);
          });
    }).catch(error => {
      document.querySelector(".Posts").textContent = "I Contenuti non sono disponibili";
    });