import React from "react";
import { useParams } from "react-router-dom";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config/config";

// Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import MovieInfo from "./MovieInfo";
import Actor from "./Actor";

// Hooks
import { useMovieFetch } from "../hooks/useMovieFetch";

// Fallback Image
import NoImage from "../images/no_image.jpg";
import Header from "./Header";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
  console.log(movie)

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <h1>Something Went Wrong...</h1>;
  }

  return (
    <React.Fragment>
      <Header disabledInput={true}/>
      <MovieInfo movie={movie} />

      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageURL={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Movie;
