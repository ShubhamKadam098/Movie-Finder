const API_KEY = "&apikey=8ebd82a";
const BASE_URL = "http://www.omdbapi.com/?";

const API_KEY2 = "c2a044df1c5d588cefce1b625b8fc808";
const BASE_URL2 = "https://api.themoviedb.org/3/";
const API_URL2 =
  BASE_URL2 + "discover/movie?sort_by=popularity.desc&api_key=" + API_KEY2;
const IMG_URL2 = "https://image.tmdb.org/t/p/w500";
const delBtn = document.querySelector("#del-btn");
const searchInput = document.querySelector("#serch-input");
const searchList = document.querySelector("#search-list");
const cardWrapper = document.querySelector(".card-wrapper");
const movieShowcase = document.querySelector(".Movie-showcase");
const mainTitle = document.querySelector("#main-title");
const btnReturn = document.querySelector(".btn-return");

// Get Popular Movies
getPopularMovies(API_URL2);

function getPopularMovies(URL) {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      displayMovies(data.results);
    });
}

function displayMovies(results) {
  cardWrapper.innerHTML = "";
  results.forEach((movies) => {
    const { title, poster_path } = movies;
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <div class="upper-body"><img src="${IMG_URL2 + poster_path}" alt=""></div>
      <div class="lowerbody">
      <h4 class="movie-title" data-title='${title}'>${title}</h4>
      </div>    
    `;
    eventListener(div);
    cardWrapper.appendChild(div);
  });
}

function eventListener(element) {
  element.addEventListener("click", (e) => {
    const title = element.querySelector("h4");
    showMovieInfo(title.getAttribute("data-title"));
  });
}

// Back Button Function
btnReturn.addEventListener("click", (e) => {
  showCard();
  btnReturn.style.display = "none";
  mainTitle.innerHTML = "Popular";
});
// Search Bar Funtions
searchInput.addEventListener("input", (e) => {
  delBtn.classList.add("active");
  if (e.target.value == "") {
    removeActive(delBtn);
    searchList.classList.remove("active");
  }
});
delBtn.addEventListener("click", (e) => {
  searchInput.value = "";
  searchList.classList.remove("active");
  removeActive(delBtn);
});

function removeActive(element) {
  element.classList.remove("active");
}

// Movie Search function

const addSearchList = (moviesList) => {
  searchList.classList.add("active");
  searchList.innerHTML = "";
  moviesList.forEach((movie) => {
    const { Title, Year, imdbId, Poster } = movie;
    const div = document.createElement("div");
    div.classList.add("search-item");
    div.innerHTML = `
    <img src="${Poster}" alt="" />
    <div class="info">
        <h4 id="movie-name">${Title}</h4>
        <h6 id="year">${Year}</h6>
    </div>
    `;
    searchList.appendChild(div);
  });
};

searchInput.addEventListener("input", (e) => {
  const searchValue = e.target.value.trim();
  if (searchValue.length > 2) {
    fetch(`${BASE_URL}s=${searchValue}${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response) {
          addSearchList(data.Search);
        } else if (data.Response != true && searchValue.length > 5) {
          alert("Sorry Movie Not Found");
        }
      });
  }
});

function showMovieInfo(title) {
  hideCard();
  mainTitle.innerHTML = `Related To: '${title}'`;
  mainTitle.style.fontWeight = "300";
  mainTitle.style.fontSize = "1.25rem";
  movieShowcase.innerHTML = "";
  fetch(`${BASE_URL}t=${title}&${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.Response);
      if (!data.Response) {
        // noMovieAvailable();
        return;
      }

      const { Title, Year, Director, Genre, Plot, imdbRating, imdbVotes } =
        data;
      let poster;
      if (data.Poster == "N/A") poster = "./images/Image-Not-Available.png";
      else poster = data.Poster;
      const div = document.createElement("div");
      div.classList.add("container");
      div.innerHTML = `
      <div class="movie-wrapper">
      <div id="poster">
        <img src="${poster}" alt="${Title}" />
      </div>
      <div class="movie-info">
        <div class="movie-title">
          <h1>${Title}</h1>
          <h5 id="year">( ${Year} )</h5>
        </div>
        <div class="movie-rating">
          <h3>Rating</h3>
          <h5 class="flex">
            <img src="./images/imdblogo.png" alt="" />
            ${imdbRating}
            <p>(${imdbVotes} Votes)</p>
          </h5>
        </div>
        <div class="movie-genre">
          <h3>Genre</h3>
          <h5>${Genre}</h5>
        </div>
        <div class="movie-director">
          <h3>Director</h3>
          <h5>${Director}</h5>
        </div>
        <div class="plot">
          <h3>Overview</h3>
          <p>
          ${Plot}
          </p>
        </div>
      </div>
    </div>

      `;
      movieShowcase.appendChild(div);
    });
}

function hideCard() {
  cardWrapper.style.display = "none";
  btnReturn.style.display = "block";
}
function showCard() {
  cardWrapper.style.display = "grid";
}
