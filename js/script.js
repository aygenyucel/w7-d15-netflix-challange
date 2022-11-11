async function getMovies(category) {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/horror",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmI2NWQ0YmUzZDAwMTU4NDYwMmIiLCJpYXQiOjE2NjgwODY2MjksImV4cCI6MTY2OTI5NjIyOX0.TamAcG1oYuQj5l9U-hIKdU_vmPqKfceiGpckjYXJ2OY",
      },
    }
  );
  const horrorMovies = await response.json();
  console.log(horrorMovies);
  return horrorMovies;
}

async function getRomanticMovies() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/romantic",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmI2NWQ0YmUzZDAwMTU4NDYwMmIiLCJpYXQiOjE2NjgwODY2MjksImV4cCI6MTY2OTI5NjIyOX0.TamAcG1oYuQj5l9U-hIKdU_vmPqKfceiGpckjYXJ2OY",
      },
    }
  );
  const romanticMovies = await response.json();
  console.log(romanticMovies);
  return romanticMovies;
}

function renderHorrorMovies(listOfMovies) {
  let horrorMovieRow = document.querySelector("#horror-movie-row");

  listOfMovies.forEach((movie) => {
    console.log("aa");
    const horrorMovieCol = document.createElement("div");
    horrorMovieCol.classList.add("col-md-2");
    horrorMovieCol.innerHTML = `<img
                                    class="movie-cover"
                                    id="horror-movie-cover"
                                    src=${movie.imageUrl}
                                    />`;

    horrorMovieRow.appendChild(horrorMovieCol);
  });
}

window.onload = async () => {
  console.log("xxxx");
  const movies = await getHorrorMovies();
  renderHorrorMovies(movies);
};
