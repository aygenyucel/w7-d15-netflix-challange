const params = new URLSearchParams(window.location.search);
const id = params.get("id");

window.onload = async () => {
  //TODO: fix for editing the movie..
  if (id) {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/movies/${id}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmI2NWQ0YmUzZDAwMTU4NDYwMmIiLCJpYXQiOjE2NjgwODY2MjksImV4cCI6MTY2OTI5NjIyOX0.TamAcG1oYuQj5l9U-hIKdU_vmPqKfceiGpckjYXJ2OY",
        },
      }
    );
    const movie = await response.json();

    let submitButton = document.querySelector("#submit-button");
    submitButton.innerText = "Edit Movie";

    document.querySelector("#movie-name").value = movie.name;
    document.querySelector("#movie-description").value = movie.description;
    document.querySelector("#movie-category").value = movie.category;
    document.querySelector("#movie-img").value = movie.imageUrl;
  }
};

async function onFormSubmit(event) {
  event.preventDefault();

  const newMovie = {
    name: document.querySelector("#movie-name").value,
    description: document.querySelector("#movie-description").value,
    category: document.querySelector("#movie-category").value,
    imageUrl: document.querySelector("#movie-img").value,
  };

  try {
    console.log(typeof `dsfkjsdlfh${newMovie.category}`);
    if (id) {
      await fetch(`https://striveschool-api.herokuapp.com/api/movies/${id}`, {
        method: "PUT",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmI2NWQ0YmUzZDAwMTU4NDYwMmIiLCJpYXQiOjE2NjgwODY2MjksImV4cCI6MTY2OTI5NjIyOX0.TamAcG1oYuQj5l9U-hIKdU_vmPqKfceiGpckjYXJ2OY",
        },
      });
      console.log("Movie Updated!");
    } else {
      await fetch(`https://striveschool-api.herokuapp.com/api/movies/`, {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmI2NWQ0YmUzZDAwMTU4NDYwMmIiLCJpYXQiOjE2NjgwODY2MjksImV4cCI6MTY2OTI5NjIyOX0.TamAcG1oYuQj5l9U-hIKdU_vmPqKfceiGpckjYXJ2OY",
        },
      });

      console.log("Movie Created!");
      console.log("newMovie:", newMovie);
      console.log("getCategories():", getCategories());
    }
  } catch (error) {
    console.error(error);
  }
}
async function getCategories() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/",
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
