## Week 1 Assignment: Flixster

Submitted by: **Snigdha**

Estimated time spent: **4** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](https://snigdha920.github.io/flixster_starter/)

### Application Features

<img width="1552" alt="Screenshot 2022-06-04 at 4 49 18 AM" src="https://user-images.githubusercontent.com/62167899/171966146-62ebbede-de8c-4bae-9fb0-656cb50302d9.png">

<img width="1552" alt="Screenshot 2022-06-04 at 4 49 24 AM" src="https://user-images.githubusercontent.com/62167899/171966160-c7b040e3-f0e0-4ed8-8f06-f6703a0d484c.png">

<img width="1552" alt="image" src="https://user-images.githubusercontent.com/62167899/171966291-878e1f2d-9413-43a2-8939-eb1af235f140.png">


#### CORE FEATURES

- [x] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [x] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [x] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [x] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [x] Website accounts for basic HTML/CSS accessibility features
- [x] Website should be responsive

#### STRETCH FEATURES

- [x] Deploy website using GitHub Pages.
- [ ] Allow user to view more details about a movie within a popup.
- [x] Improve the user experience through CSS & animation.
- [ ] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [ ] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video or gif actually renders and animates when viewing this README. (🚫 Remove this paragraph after adding walkthrough video)

`ADD_EMBEDDED_CODE_HERE`

### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The course content was perfectly enough to solve this assignment for me.

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

Change the way my project responded to a particular event:

1. Currently, when I search for a project - my `Load more` button will still get the "Now playing" movies. I could hide this button entirely.
   Ideally, I would like to load more results for the particular search query. It would be implemented very similar to keeping track of pages for the `Now playing`, with one difference. When the user clicks on back or closes the search we would set the initial page number for search query results back to 1.

   If we want to optimise like a beast, I suppose we could also implement a cache to store the results of a previously executed search query. The next time the user looks for the same query - we could display the data from the cache while fetching and updating data from the server.

   This is 100% overkill, since the API is fast and the application is small - probably a pattern for larger scale projects.
   
2. The url I'm using to fetch the poster images doesn't exactly follow how the doc tells us to fetch images. In the docs, they ask to get the `base_url` from another API call, and use that to fetch the poster images. However, the `base_url` that is given for fetching the example in the docs works for 99% of the cases. So I've avoided the additional overhead of the API call, taken a bit of a shortcut. 

Additional features:

1. Support different languages, since the Movies API provides support for different languages
2. Could have a filter `Children only`, since the API returns whether the movie is only for adults or not
3. On each movie card, have a small play button which would render an `iframe` instead of the movie poster `img` and play the trailer on hover
4. Caraosel of images for each movie in the modal we see after clicking the movie card. The API has an endpoint to fetch some images for a movie.
5. Instead of showing just the `Now Playing` movies, we could convert it to a dropdown which has many other categories alongside `Now playing` like `Top Rated`, `Popular`, `Upcoming`, etc.

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

  NA

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.
