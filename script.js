// Global Constants
const apiKey = 'fd5d3fc9471d39b2de5345ee738d7669'
const movieApiHost = 'https://api.themoviedb.org/3'
const moviePosterApiHost = 'https://image.tmdb.org/t/p'
const moviePosterWidth = 'w400'

// Global Variables
var currentApiPage = 1
var currentSearchTerm = ''
var moviesBeforeSearch = ''

// Page Elements
const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')
const moviesGrid = document.getElementById('movies-grid')
const loadMoreMoviesBtn = document.getElementById('load-more-movies-btn')
const closeSearchBtn = document.getElementById('close-search-btn')

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

async function searchMovieByQueryString(searchQuery) {
  const response = await fetch(`${movieApiHost}/search/movie?api_key=${apiKey}&query=${encodeURI(searchQuery)}`)
  const jsonResponse = await response.json();

  return jsonResponse.results
}

/** Render list of results. */
function displayResults(results) {
  const moviesHTMLString = results
    .map(
      (movie) => `
      <div class="movie-card" id="${results.id}">
        <img class="movie-poster" src="${moviePosterApiHost}/${moviePosterWidth}${movie.poster_path}?api_key=${apiKey}" alt="Poster for movie ${movie.title}"/>
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

/** On form submit, clear the list, get results and add to list. */
async function handleSearchFormSubmit(event) {
  event.preventDefault();

  // Save the movies displayed before search
  moviesBeforeSearch = moviesGrid.innerHTML

  // Clear display
  moviesGrid.innerHTML = '';

  // Search for movies by query
  currentSearchTerm = searchInput.value;
  const results = await searchMovieByQueryString(currentSearchTerm);

  // Display Results
  displayResults(results);
}

// Handlers
async function handleLoadMoreClick(event) {
  currentApiPage++;
  await fetchAndDisplayNowPlayingMovies()
}

function handleCloseSearchBtnClick(event) {
  if (currentSearchTerm.length === 0) return;

  currentSearchTerm = ''
  searchInput.value = ''
  moviesGrid.innerHTML = moviesBeforeSearch
  return;
}

window.onload = () => {
  loadMoreMoviesBtn.addEventListener("click", handleLoadMoreClick);
  searchForm.addEventListener('submit', handleSearchFormSubmit);
  closeSearchBtn.addEventListener('click', handleCloseSearchBtnClick);

  fetchAndDisplayNowPlayingMovies();
}
