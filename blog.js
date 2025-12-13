const post = [
  {
    title: "CREAZIONE BLOG CON JS",
    link: "./blogs/Blog2.html"
  }
];

const postaBlog = document.querySelector(".Posts");

post.forEach(post => {
  const a = document.createElement("a");
  a.href = post.link;
  a.classList.add("linkBlog");
  
  a.innerHTML=`
      <article class="Blog">
        <h2 class="TestoBlog">${post.title}</h2>
      </article>
  `;
  
  postaBlog.appendChild(a);
});