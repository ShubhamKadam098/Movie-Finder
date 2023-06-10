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
const movieShowcase = document.querySelector(".Movie-showcase");

let selectedMovieId = "";
const popularMovies = [
  {
    adult: false,
    backdrop_path: "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
    genre_ids: [28, 53, 80],
    id: 603692,
    original_language: "en",
    original_title: "John Wick: Chapter 4",
    overview:
      "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    popularity: 3701.122,
    poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    release_date: "2023-03-22",
    title: "John Wick: Chapter 4",
    video: false,
    vote_average: 7.9,
    vote_count: 2787,
  },
  {
    adult: false,
    backdrop_path: "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
    genre_ids: [28, 80, 53],
    id: 385687,
    original_language: "en",
    original_title: "Fast X",
    overview:
      "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    popularity: 3047.913,
    poster_path: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    release_date: "2023-05-17",
    title: "Fast X",
    video: false,
    vote_average: 7.3,
    vote_count: 946,
  },
  {
    adult: false,
    backdrop_path: "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
    genre_ids: [16, 10751, 12, 14, 35],
    id: 502356,
    original_language: "en",
    original_title: "The Super Mario Bros. Movie",
    overview:
      "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    popularity: 2947.91,
    poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    release_date: "2023-04-05",
    title: "The Super Mario Bros. Movie",
    video: false,
    vote_average: 7.8,
    vote_count: 4488,
  },
  {
    adult: false,
    backdrop_path: "/jo4JPyA8dvvnKwBRpi2A5fKK5fs.jpg",
    genre_ids: [28, 12, 16, 878],
    id: 569094,
    original_language: "en",
    original_title: "Spider-Man: Across the Spider-Verse",
    overview:
      "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    popularity: 2796.055,
    poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    release_date: "2023-05-31",
    title: "Spider-Man: Across the Spider-Verse",
    video: false,
    vote_average: 8.8,
    vote_count: 982,
  },
  {
    adult: false,
    backdrop_path: "/woJbg7ZqidhpvqFGGMRhWQNoxwa.jpg",
    genre_ids: [28, 12, 878],
    id: 667538,
    original_language: "en",
    original_title: "Transformers: Rise of the Beasts",
    overview:
      "A '90s globetrotting adventure that introduces the Maximals, Predacons, and Terrorcons to the existing battle on earth between Autobots and Decepticons.",
    popularity: 1643.4,
    poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    release_date: "2023-06-06",
    title: "Transformers: Rise of the Beasts",
    video: false,
    vote_average: 7.7,
    vote_count: 100,
  },
  {
    adult: false,
    backdrop_path: "/9t0tJXcOdWwwxmGTk112HGDaT0Q.jpg",
    genre_ids: [27, 53],
    id: 890771,
    original_language: "en",
    original_title: "The Black Demon",
    overview:
      "Oilman Paul Sturges' idyllic family vacation turns into a nightmare when they encounter a ferocious megalodon shark that will stop at nothing to protect its territory. Stranded and under constant attack, Paul and his family must somehow find a way to get his family back to shore alive before it strikes again in this epic battle between humans and nature.",
    popularity: 1581.872,
    poster_path: "/uiFcFIjig0YwyNmhoxkxtAAVIL2.jpg",
    release_date: "2023-04-26",
    title: "The Black Demon",
    video: false,
    vote_average: 6.4,
    vote_count: 117,
  },
  {
    adult: false,
    backdrop_path: "/8FhKnPpql374qyyHAkZDld93IUw.jpg",
    genre_ids: [9648, 53, 878],
    id: 536437,
    original_language: "en",
    original_title: "Hypnotic",
    overview:
      "A detective becomes entangled in a mystery involving his missing daughter and a secret government program while investigating a string of reality-bending crimes.",
    popularity: 1343.079,
    poster_path: "/3IhGkkalwXguTlceGSl8XUJZOVI.jpg",
    release_date: "2023-05-11",
    title: "Hypnotic",
    video: false,
    vote_average: 6.6,
    vote_count: 129,
  },
  {
    adult: false,
    backdrop_path: "/ribiMu3iINPxDkofErPxe8jQ8L0.jpg",
    genre_ids: [12, 10751, 14, 10749],
    id: 447277,
    original_language: "en",
    original_title: "The Little Mermaid",
    overview:
      "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
    popularity: 1260.89,
    poster_path: "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
    release_date: "2023-05-18",
    title: "The Little Mermaid",
    video: false,
    vote_average: 6.1,
    vote_count: 563,
  },
  {
    adult: false,
    backdrop_path: "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    genre_ids: [878, 12, 28],
    id: 447365,
    original_language: "en",
    original_title: "Guardians of the Galaxy Vol. 3",
    overview:
      "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    popularity: 1058.901,
    poster_path: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    release_date: "2023-05-03",
    title: "Guardians of the Galaxy Vol. 3",
    video: false,
    vote_average: 8.1,
    vote_count: 1882,
  },
  {
    adult: false,
    backdrop_path: "/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg",
    genre_ids: [53, 27],
    id: 713704,
    original_language: "en",
    original_title: "Evil Dead Rise",
    overview:
      'Three siblings find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable."',
    popularity: 1053.715,
    poster_path: "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
    release_date: "2023-04-12",
    title: "Evil Dead Rise",
    video: false,
    vote_average: 7.1,
    vote_count: 1556,
  },
  {
    adult: false,
    backdrop_path: "/oG6kFmxvwrOGKEmqvLNNI6lH0EO.jpg",
    genre_ids: [10752, 53, 28, 12, 9648, 878, 18],
    id: 1018494,
    original_language: "en",
    original_title: "Operation Seawolf",
    overview:
      "During the last days of World War II, Germany, desperate for any last grasp to defeat the allied powers, looked to their last remaining weapons and soldiers. The German Navy and the last remaining U-Boats were formed together for one desperate last mission – a mission to attack the United States Homeland, known as Operation Seawolf. Captain Hans Kessler, a grizzled submarine commander from both World Wars, is called into service to make one mission a success and help turn the tide of the war.",
    popularity: 1049.649,
    poster_path: "/eqm5EAyC9hJCN5qutuW4Ka1xYbU.jpg",
    release_date: "2022-10-07",
    title: "Operation Seawolf",
    video: false,
    vote_average: 6.2,
    vote_count: 39,
  },
  {
    adult: false,
    backdrop_path: "/m8JTwHFwX7I7JY5fPe4SjqejWag.jpg",
    genre_ids: [28, 12, 878],
    id: 640146,
    original_language: "en",
    original_title: "Ant-Man and the Wasp: Quantumania",
    overview:
      "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
    popularity: 1014.591,
    poster_path: "/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
    release_date: "2023-02-15",
    title: "Ant-Man and the Wasp: Quantumania",
    video: false,
    vote_average: 6.5,
    vote_count: 3190,
  },
  {
    adult: false,
    backdrop_path: "/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
    genre_ids: [878, 12, 28],
    id: 76600,
    original_language: "en",
    original_title: "Avatar: The Way of Water",
    overview:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    popularity: 1006.068,
    poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    release_date: "2022-12-14",
    title: "Avatar: The Way of Water",
    video: false,
    vote_average: 7.7,
    vote_count: 8405,
  },
  {
    adult: false,
    backdrop_path: "/r2tDSD6kcHflPzsGepl8aTPTWxy.jpg",
    genre_ids: [28, 35, 80],
    id: 879444,
    original_language: "en",
    original_title: "Accident Man: Hitman's Holiday",
    overview:
      "The Accident Man is back, and this time he must best the top assassins in the world to protect the ungrateful son of a mafia boss, save the life of his only friend and rekindle his relationship with his maniacal father figure.",
    popularity: 990.447,
    poster_path: "/npW9nfL7F3ZVpaCpabqo98KTLw6.jpg",
    release_date: "2022-10-14",
    title: "Accident Man: Hitman's Holiday",
    video: false,
    vote_average: 6.8,
    vote_count: 74,
  },
  {
    adult: false,
    backdrop_path: "/94TIUEhuwv8PhdIADEvSuwPljS5.jpg",
    genre_ids: [28, 10752],
    id: 840326,
    original_language: "fi",
    original_title: "Sisu",
    overview:
      "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.",
    popularity: 954.496,
    poster_path: "/ygO9lowFMXWymATCrhoQXd6gCEh.jpg",
    release_date: "2023-01-27",
    title: "Sisu",
    video: false,
    vote_average: 7.4,
    vote_count: 624,
  },
  {
    adult: false,
    backdrop_path: "/ArKDl3GsFpSdDNFnXftNexuEVGF.jpg",
    genre_ids: [28, 12],
    id: 1073140,
    original_language: "en",
    original_title: "The Three Musketeers",
    overview:
      "France is in turmoil and a new, naive King finds himself manipulated by the evil Cardinal Richelieu. With a corrupt commander of the royal guard by his side the Cardinal employs the expertise of the devious and wicked Milady de Winter in a plot to bring down the monarchy and drag the country into war. As France burns the Cardinal will take control. All that stands between them and victory are the remnants of an elite group who wore loyalty to crown and country. Above all else The Musketeers will stand against the odds to foil this deadly plot.",
    popularity: 903.818,
    poster_path: "/l72yy6rPzsH8eHhEOknxlipkV95.jpg",
    release_date: "2023-03-23",
    title: "The Three Musketeers",
    video: false,
    vote_average: 5.6,
    vote_count: 23,
  },
  {
    adult: false,
    backdrop_path: "/jqwM0nhOLEFI1HHBabwr80Od3TC.jpg",
    genre_ids: [28, 12, 16, 878],
    id: 324857,
    original_language: "en",
    original_title: "Spider-Man: Into the Spider-Verse",
    overview:
      'Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson "Kingpin" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.',
    popularity: 896.574,
    poster_path: "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    release_date: "2018-12-06",
    title: "Spider-Man: Into the Spider-Verse",
    video: false,
    vote_average: 8.4,
    vote_count: 13011,
  },
  {
    adult: false,
    backdrop_path: "/oUeqFfImkFDRxTjwhS6KZ5MB8lL.jpg",
    genre_ids: [28, 18, 10752],
    id: 1098110,
    original_language: "de",
    original_title: "Blood & Gold",
    overview:
      "At the end of World War II, a German soldier is looking for his daughter while an SS troop is looking for a Jewish treasure.",
    popularity: 851.058,
    poster_path: "/xayG1dbIjJkmvimekx6TNrMOXmA.jpg",
    release_date: "2023-04-21",
    title: "Blood & Gold",
    video: false,
    vote_average: 6.6,
    vote_count: 143,
  },
  {
    adult: false,
    backdrop_path: "/gFiPQZh6W2qEVKYnAQjtq66qJqI.jpg",
    genre_ids: [53, 18, 28],
    id: 1107872,
    original_language: "pl",
    original_title: "Dzień Matki",
    overview:
      "Nina, a former NATO special operations agent living in hiding, has to use all her deadly skills to rescue her son who has been kidnapped by ruthless gangsters. Finding Max is a double opportunity for her. A chance to feel the adrenaline rush again, and an opportunity to get back into the life of the son she had to abandon years ago.",
    popularity: 841.542,
    poster_path: "/wws9Z90DdZ7D0n3gdzFSZ6cntJi.jpg",
    release_date: "2023-05-24",
    title: "Mother's Day",
    video: false,
    vote_average: 5.8,
    vote_count: 88,
  },
  {
    adult: false,
    backdrop_path: "/eTvN54pd83TrSEOz6wbsXEJktCV.jpg",
    genre_ids: [10752, 28, 53],
    id: 882569,
    original_language: "en",
    original_title: "Guy Ritchie's The Covenant",
    overview:
      "During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.",
    popularity: 802.185,
    poster_path: "/jZy73aPYrwwhuc37ALgnJUCaTnK.jpg",
    release_date: "2023-04-19",
    title: "Guy Ritchie's The Covenant",
    video: false,
    vote_average: 7.6,
    vote_count: 489,
  },
];

// Utility Functions
function removeActive(element) {
  element.classList.remove("active");
}
function addActive(element) {
  element.classList.add("active");
}
function changeTitle(value) {
  mainTitle.innerHTML = `Related To: '${value}'`;
  mainTitle.style.fontWeight = "300";
  mainTitle.style.fontSize = "1.25rem";
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
  btnReturn.style.display = "none";
  mainTitle.innerHTML = "Popular";
});

//      Get Popular Movies
//document.addEventListener("load", getPopularMovies(API_URL));
document.addEventListener("load", displayMovieCard(popularMovies));

function getPopularMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      popularMovies[0] = data.results;
      displayMovieCard(data.results);
    });
}

//      Display The Cards
function displayMovieCard(results) {
  console.log(results);
  cardWrapper.innerHTML = "";
  results.forEach((movies) => {
    const { title, poster_path, id } = movies;
    let poster;
    if (poster_path == null) poster = "./images/Image-Not-Available.png";
    else poster = IMG_URL + poster_path;
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <div class="upper-body"><img src="${poster}" alt=""></div>
      <div class="lowerbody">
      <h4 class="movie-title" data-id='${id}'>${title}</h4>
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
    selectedMovieId = title.getAttribute("data-id");
    console.log(selectedMovieId);
  });
}

// Movie Search function
searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!searchInput.value) {
    console.log("returned");
    return;
  }
  const searchUrl = `${BASE_URL}/search/movie?query=${searchInput.value}&include_adult=false&sort_by=vote_average.desc&language=en-US&page=1${API_KEY}`;

  fetch(searchUrl)
    .then((res) => res.json())
    .then((info) => {
      changeTitle(searchInput.value);
      addActive(btnReturn);
      if (info.results[0] == null) {
        noMovieFound();
        return;
      }
      displayMovieCard(info.results);
    });
});

function noMovieFound() {
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
