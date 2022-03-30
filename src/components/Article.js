export class Article extends HTMLElement {
  set article(article) {
    this.innerHTML = `
      <div class="article">
        <a href="${article.url}">
          <h2>${article.title}</h2>
          <span class="author">${article.author ? article.author : ""}</span>
          <img src="${article.urlToImage}" alt="" />
          <p>${article.description}</p>
        </a>
    </div>
    `;
  }
}
customElements.define("news-article", Article);
