const API_KEY = "&api_key=c2a044df1c5d588cefce1b625b8fc808";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_URL = BASE_URL + "discover/movie?sort_by=popularity.desc" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
// Search Bar
const searchBar = document.querySelector("#searchbar");
const searchInput = document.querySelector("#serch-input");
const delBtn = document.querySelector("#del-btn");
const searchBtn = document.querySelector(".search-btn");
//Head Title
const mainTitle = document.querySelector("#main-title");
const btnReturn = document.querySelector(".btn-return");
// Showcase
const cardWrapper = document.querySelector(".card-wrapper");

// Utility Functions
function removeActive(element) {
  element.classList.remove("active");
}
function addActive(element) {
  element.classList.add("active");
}
function changeTitle(value) {
  mainTitle.innerHTML = `Search For: '${value}'`;
  mainTitle.style.fontWeight = "300";
}
function truncate(str, n, useWordBoundary) {
  if (str.length <= n) {
    return str;
  }
  const subString = str.slice(0, n - 1); // the original check
  return (
    (useWordBoundary
      ? subString.slice(0, subString.lastIndexOf(" "))
      : subString) + "&hellip;"
  );
}

// Searchbar Del Buttton Funtions
searchInput.addEventListener("input", (e) => {
  delBtn.classList.add("active");
  if (e.target.value == "") {
    removeActive(delBtn);
  }
});
delBtn.addEventListener("click", (e) => {
  searchInput.value = "";
  removeActive(delBtn);
});

// Back Button Function
btnReturn.addEventListener("click", (e) => {
  window.location = "./index.html";
});

//      Get Popular Movies
document.addEventListener("load", getPopularMovies(API_URL));

function getPopularMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayMovieCard(data.results);
    });
}

// Movie Search function
searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!searchInput.value) return;
  addActive(btnReturn);
  const searchUrl = `${BASE_URL}/search/movie?query=${searchInput.value}&include_adult=false&sort_by=vote_average.desc&language=en-US&page=1${API_KEY}`;
  fetch(searchUrl)
    .then((res) => res.json())
    .then((info) => {
      changeTitle(searchInput.value);
      displayMovieCard(info.results);
    });
});

//      Display The Cards
function displayMovieCard(results) {
  if (results[0] == null) {
    addNoMovieFound();
    return;
  }
  removeNoMovieFound();
  cardWrapper.innerHTML = "";
  results.forEach((movies) => {
    const { title, poster_path, id } = movies;
    let poster;
    if (poster_path == null) poster = "./images/Image-Not-Available.png";
    else poster = IMG_URL + poster_path;
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <div class="upper-body "><img src="${poster}" alt="./images/Image-Not-Available.png"></div>
      <div class="lowerbody">
      <h4 class="movie-title" data-id='${id}'>${truncate(title, 22, true)}</h4>
      </div>    
    `;
    cardEventListener(div);
    cardWrapper.appendChild(div);
  });
}

// Adding Event Listners to Cards
function cardEventListener(element) {
  element.addEventListener("click", (e) => {
    const title = element.querySelector("h4");
    localStorage.setItem("selectedMovieId", title.getAttribute("data-id"));
    window.location = "./movies.html";
  });
}
//      Movie Not Found Section
function addNoMovieFound() {
  const body = document.querySelector("body");
  const footer = document.querySelector("footer");
  cardWrapper.innerHTML = "";
  const section = document.createElement("section");
  section.id = "not-found";
  section.innerHTML = `
  <div class=""><img src="./images/sorry.png" alt="Sorry" /></div>
  <div class=""><h1>Movie Not Found!</h1></div>
  `;
  section.style.display = "flex";
  body.insertBefore(section, footer);
}
function removeNoMovieFound() {
  const noMovieSection = document.querySelector("#not-found");
  if (!noMovieSection) return;
  const body = document.querySelector("body");

  body.removeChild(noMovieSection);
}
