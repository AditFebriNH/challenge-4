import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiStar } from "react-icons/bi";
import { IconContext } from "react-icons";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config/config";

import NoImage from "../../images/no_image.jpg";

const MovieInfo = ({ movie }) => {
  const [video, setVideo] = useState([]);
  const API_KEY = "b179811e5f77d94db361d570b9dea8e7";

  const fetchVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`
    );
    const videodata = await data.json();
    setVideo(videodata.results);
  };
  useEffect(() => {
    fetchVideo();
  }, []);
  return (
  <section className="relative h-screen">
    <div className="absolute flex flex-col justify-center h-full max-w-[50vw] p-5 gap-7">
      <h1 className="text-white w-full text-6xl font-bold mt-20">{movie.title}</h1>
      <h3 className="flex text-white text-xl">
        {movie.genres.map((genre) => genre.name).join(", ")}
      </h3>
      <p className="text-xl">{movie.overview}</p>
      <div className="text-white flex">
        <IconContext.Provider value={{ size: "1.5rem", color: "yellow" }}>
          <BiStar />
          {movie.vote_average / 2} / 5
        </IconContext.Provider>
      </div>
      <div className="flex justify-start items-center mb-10 gap-5 flex-wrap">
        {Array.from(video)
          .filter((trail) => trail.type === "Trailer")
          .map((trail, index) => (
            <>
              <>
                <a
                  key={trail.id}
                  href={"https://www.youtube.com/watch?v=" + trail.key}
                  target="_blank"
                  className="rounded-full bg-red-600 text-white font-bold text-lg w-[35%] py-2 flex justify-center items-center gap-3"
                >
                  <AiOutlinePlayCircle /> WATCH TRAILER{" "}
                  {Array.from(video).filter((trail) => trail.type === "Trailer")
                    .length > 1
                    ? index + 1
                    : ""}
                </a>
              </>
            </>
          ))}
      </div>
    </div>
    <div className="overflow-hidden w-full h-screen">
      <img
        src={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
        }
        alt={movie.title}
        className="w-screen"
      ></img>
    </div>
  </section>
  )
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;
