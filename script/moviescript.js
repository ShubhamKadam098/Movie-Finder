import { BASE_URL, API_KEY, selectedMovieId } from "./script";
const headTitle = document.querySelector("#main-title");
const notFoundSection = document.querySelector("#not-found");
const movieShowcase = document.querySelector(".Movie-showcase");

window.addEventListener("load", (e) => {
  if (selectedMovieId == null) {
    movieNotFound();
  } else {
    showMovieInfo(selectedMovieId);
  }
});

// Function to Show the complete Details

function showMovieInfo(imdbID) {
  fetch(`${BASE_URL}i=${imdbID}&${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.Response);
      if (!data.Response) {
        movieNotFound();
        return;
      }

      const { Title, Year, Director, Genre, Plot, imdbRating, imdbVotes } =
        data;
      let poster;
      if (data.Poster == "N/A") poster = "./images/Image-Not-Available.png";
      else poster = data.Poster;
      // Changing Heading
      headTitle.innerHTML = `Related To: '${Title}'`;
      headTitle.style.fontWeight = "300";
      headTitle.style.fontSize = "1.25rem";
      movieShowcase.innerHTML = "";
      // Adding the Details Section
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

function movieNotFound() {
  notFoundSection.style.display = "flex";
}
