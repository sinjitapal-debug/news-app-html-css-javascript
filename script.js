const API_KEY = "8a2358150c5246269c56ff7485dfd48f";
const url="https://newsapi.org/v2/everything?q=";
let currentPage = 1;
const pageSize = 6;
let currentQuery = "India";


window.addEventListener('load', () => {
    fetchNews("India");

    document.getElementById("next-btn").addEventListener("click", () => {
        fetchNews(currentQuery, currentPage + 1);
    });

    document.getElementById("prev-btn").addEventListener("click", () => {
        if (currentPage > 1) {
            fetchNews(currentQuery, currentPage - 1);
        }
    });
});
function reload() {
    window.location.reload();
}


async function fetchNews(query, page = 1) {
    currentQuery = query;
    currentPage = page;

    const res = await fetch(
        `${url}${query}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`
    );

    const data = await res.json();
    console.log(data);
    bindData(data.articles);
    document.getElementById("page-number").innerText = `Page ${currentPage}`;
    document.getElementById("prev-btn").disabled = currentPage === 1;
}


function bindData(articles){
    const cardsContainer = document.getElementById('cards-container');
    const newsCardTemplate = document.getElementById('template-news-card');

    cardsContainer.innerHTML= '';

    articles.forEach(article => {
        if(!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
   

    });
}

function fillDataInCard(cardClone, article){
    const newsImg = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#news-desc');
    const readMore = cardClone.querySelector('#read-more');

     newsImg.src = article.urlToImage;
     newsTitle.innerHTML = article.title;
     newsDesc.innerHTML= article.description;

     const date = new Date(article.publishedAt).toLocaleString("en-US",{timeZone: "Asia/Jakarta"
     });

     newsSource.innerHTML = `${article.source.name} ${date}`;
     readMore.href = article.url;
      
   
    
    }
    let curSelectedNav = null;
  function onNavItemClick(id){
         fetchNews(id);
         const navItem = document.getElementById(id);
         curSelectedNav?.classList.remove('active');
         curSelectedNav = navItem;
         curSelectedNav.classList.add('active');

  }

  const searchButton = document.getElementById('search-button');
  const searchText= document.getElementById('search-text');

  searchButton.addEventListener('click',() => {
     const query = searchText.value;
     if(!query) return;
     fetchNews(query);
      curSelectedNav?.classList.remove('active');
      curSelectedNav=null;
  });

