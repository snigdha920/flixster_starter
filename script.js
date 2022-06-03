// Global Constants
const apiKey = 'fd5d3fc9471d39b2de5345ee738d7669'
const movieApiHost = 'https://api.themoviedb.org/3'
const moviePosterApiHost = 'https://image.tmdb.org/t/p'
const moviePosterWidth = 'w400'

// Global Variables
var currentApiPage = 1
var currentSearchTerm = ''

// Page Elements
const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')
const moviesGrid = document.getElementById('movies-grid')
const loadMoreMoviesBtn = document.getElementById('load-more-movies-btn')

/** Get results from API. */
async function getMoviesNowPlaying() {
  const response = await fetch(
    `${movieApiHost}/movie/now_playing?api_key=${apiKey}&page=${currentApiPage}`,
  )
  const jsonResponse = await response.json()

  // Debug
  // console.log('getMoviesNowPlaying jsonResponse', jsonResponse)

  return jsonResponse.results
}

/** Render list of results. */
function displayResults(results) {
  const moviesHTMLString = results
    .map(
      (movie) => `
      <div class="movie-card">
        <img class="movie-poster" src="${moviePosterApiHost}/${moviePosterWidth}${movie.poster_path}?api_key=${apiKey}"/>
        <h3 class="movie-title">${movie.title}</h3>
        <p class="movie-votes">⭐️ ${movie.vote_average}</p>
      </div>
    `,
    )
    .join('')

  moviesGrid.innerHTML = moviesGrid.innerHTML + moviesHTMLString
}

/** Fetch the now playing movies and display them */
async function fetchAndDisplayNowPlayingMovies() {
  const results = await getMoviesNowPlaying()

  // Debug
  // console.log('displayNowPlayingMovies results', results);

  displayResults(results)
}

/** On form submit, get results and add to list. */
// async function handleFormSubmit(event) {
//     event.preventDefault();
//     gifAreaDiv.innerHTML = '';
//     currentSearchTerm = searchInput.value;
//     const results = await getResults(currentSearchTerm);
//     displayResults(results);
//     searchInput.value = '';
//     currentApiPage++;
//     showMeMoreBtn.classList.remove('hidden');
// }

// searchForm.addEventListener('submit', handleFormSubmit);

// Handlers
async function handleLoadMoreClick(event) {
  currentApiPage++;
  await fetchAndDisplayNowPlayingMovies()
}

async function handleMouseEnterOnSearchBtn(event) {
  searchInput.classList.add('search-input-wide');
}

async function handleMouseLeaveOnSearchBtn(event) {
  searchInput.classList.remove('search-input-wide');
}

window.onload = () => {
  loadMoreMoviesBtn.addEventListener("click", handleLoadMoreClick);
  // searchInput.addEventListener('mouseenter', handleMouseEnterOnSearchBtn);
  // searchInput.addEventListener('mouseleave', handleMouseLeaveOnSearchBtn);

  fetchAndDisplayNowPlayingMovies();
}
