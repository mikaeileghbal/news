import { apiURL } from "./newsUrl.js";
import "./components/Article.js";

const main = document.getElementById("main-articles");

document.addEventListener("DOMContentLoaded", () => {
  updateActicles();
});

async function updateActicles() {
  const res = await fetch(apiURL);
  const results = await res.json();

  results.articles.map(createArticle);
}

function createArticle(article) {
  // return `
  //     <div class="article">
  //       <a href="${article.url}">
  //         <h2>${article.title}</h2>
  //         <img src="${article.urlToImage}" alt="" />
  //         <p>${article.description}</p>
  //       </a>
  //   </div>
  // `;

  const articleElem = document.createElement("news-article");
  articleElem.article = article;
  main.appendChild(articleElem);
}
