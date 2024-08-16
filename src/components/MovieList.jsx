import React from "react";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-12">
          <img
            src={movie.Poster}
            style={{ width: "300px", height: "500px" }}
            alt="movie"
          ></img>
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
