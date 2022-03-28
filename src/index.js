import { apiURL } from "./newsUrl.js";
const main = document.getElementById("main-articles");

document.addEventListener("DOMContentLoaded", () => {
  updateActicles();
});

async function updateActicles() {
  const res = await fetch(apiURL);
  const results = await res.json();

  main.innerHTML = results.articles.map(createArticle).join("\n");
}

function createArticle(article) {
  return `
      <div class="article">
        <a href="${article.url}">
          <h2>${article.title}</h2>
          <img src="${article.urlToImage}" alt="" />
          <p>${article.description}</p>
        </a>
    </div>
  `;
}
