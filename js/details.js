const params = new URLSearchParams(window.location.search);
console.log(params);
const movie_id = params.get("movie_id");
console.log("get:", movie_id);

async function getMovie() {
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/movies/${movie_id}`,
    {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmI2NWQ0YmUzZDAwMTU4NDYwMmIiLCJpYXQiOjE2NjgwODY2MjksImV4cCI6MTY2OTI5NjIyOX0.TamAcG1oYuQj5l9U-hIKdU_vmPqKfceiGpckjYXJ2OY",
      },
    }
  );
  const movie = await response.json();
  console.log(movie);
  return movie;
}

function renderMovie(movie) {
  document.querySelector("#movie-details").innerHTML = `
  <h3>${movie.name}</h3>
  <img
    src=${movie.imgUrl}
    alt=""
    style="
      width: 400px;
      height: auto;
      object-fit: cover;
      margin-block: 20px;
    "
  />
  <p>${movie.descriptipn}</p>
  <div><strong>category:</strong> ${movie.category}</div>  
                                                
                                                `;
}

window.onload = async () => {
  const movie = await getMovie();
  renderMovie(movie);
};

async function onDelete() {
  try {
    if (confirm("Do you really want to delete this movie?")) {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/movies/${movie_id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmI2NWQ0YmUzZDAwMTU4NDYwMmIiLCJpYXQiOjE2NjgwODY2MjksImV4cCI6MTY2OTI5NjIyOX0.TamAcG1oYuQj5l9U-hIKdU_vmPqKfceiGpckjYXJ2OY",
          },
        }
      );
      if (response.ok) {
        window.location.assign("index.html");
      } else {
        alert("Error while deleting!");
      }
    }
  } catch (error) {
    alert(`Some erorr occured: ${error}`);
  }
}

function onEdit() {
  window.location.assign(`backoffice.html?movieId=${movieId}`);
}
