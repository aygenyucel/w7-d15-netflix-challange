async function getMovies(category) {
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/movies/${category}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmI2NWQ0YmUzZDAwMTU4NDYwMmIiLCJpYXQiOjE2NjgwODY2MjksImV4cCI6MTY2OTI5NjIyOX0.TamAcG1oYuQj5l9U-hIKdU_vmPqKfceiGpckjYXJ2OY",
      },
    }
  );
  const movies = await response.json();
  console.log(movies);
  return movies;
}

function renderMovies(listOfMovies, category) {
  let movieRow = document.querySelector(`#${category}-movie-row`);

  listOfMovies.forEach((movie) => {
    const movieCol = document.createElement("div");
    movieCol.classList.add("col-md-2");

    movieCol.innerHTML = `
                                    <a class"col" href="details.html?movie_id=${movie._id}">
                                    <img
                                    class="movie-cover"
                                    id="${category}-movie-cover"
                                    src=${movie.imageUrl}/>
                                    </a>`;

    movieRow.appendChild(movieCol);
  });
}

window.onload = async () => {
  const horrorMovies = await getMovies("horror");
  const romanticMovies = await getMovies("romantic");
  renderMovies(horrorMovies, "horror");
  renderMovies(romanticMovies, "romantic");
};
