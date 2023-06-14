// API Keys
const API_KEY = "&api_key=c2a044df1c5d588cefce1b625b8fc808";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_URL = BASE_URL + "discover/movie?sort_by=popularity.desc" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

// Elements
const headTitle = document.querySelector("#main-title");
const notFoundSection = document.querySelector("#not-found");
const movieShowcase = document.querySelector(".Movie-showcase");
const pageTitle = document.querySelector("#page-title");

window.addEventListener("load", showMovieInfo());

//      Show Movie Details
function showMovieInfo() {
  const movieId = localStorage.getItem("selectedMovieId");
  if (!movieId) {
    console.log(movieId);
    showNotFoundSection();
    return;
  }
  removeNoMovieSection();
  const movieUrl = `${BASE_URL}movie/${movieId}?language=en-US${API_KEY}`;
  console.log(movieUrl);
  fetch(movieUrl)
    .then((res) => res.json())
    .then((data) => {
      const {
        original_title,
        release_date,
        genres,
        overview,
        status,
        vote_average,
        vote_count,
      } = data;

      let poster;
      if (data.poster_path == "N/A")
        poster = "./images/Image-Not-Available.png";
      else poster = data.poster_path;
      // Changing Heading
      headTitle.innerHTML = `Movie: '${original_title}'`;
      headTitle.style.fontWeight = "300";
      headTitle.style.fontSize = "1.25rem";
      movieShowcase.innerHTML = "";
      // Adding the Details Section
      const div = document.createElement("div");
      div.classList.add("container");
      div.innerHTML = `
        <div class="movie-wrapper">
        <div id="poster">
          <img class="skeleton" src="${IMG_URL}${poster}" alt="./images/Image-Not-Available.png"/>
        </div>
        <div class="movie-info">
          <div class="movie-title">
            <h1>${original_title}</h1>
            <h5 id="year">(${getDate(release_date)})</h5>
          </div>
          <div class="movie-rating">
            <h3>Rating</h3>
            <h5 class="flex">
              <img src="./images/imdblogo.png" alt="" />
              ${vote_average}
              <p>(${vote_count} Votes)</p>
            </h5>
          </div>
          <div class="movie-genre">
            <h3>Genre</h3>
            <ul id="genre-list">
            </ul>
          </div>
          <div class="movie-status">
            <h3>Status</h3>
            <h5>${status}</h5>
          </div>
          <div class="plot">
            <h3>Overview</h3>
            <p>
            ${overview}
            </p>
          </div>
        </div>
      </div>
      `;

      const genreList = div.querySelector("#genre-list");
      genres.forEach((genreItem) => {
        const li = document.createElement("li");
        li.className = "genre-item";
        li.innerHTML = `${genreItem.name}`;
        genreList.appendChild(li);
      });
      movieShowcase.appendChild(div);
    });
}

function showNotFoundSection() {
  notFoundSection.style.display = "flex";
}

function removeNoMovieSection() {
  notFoundSection.style.display = "none";
}
function getDate(release_date) {
  return release_date.substring(0, 4);
}
