import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AiOutlinePlayCircle } from "react-icons/ai";
// Styles

const HeroImage = ({ id, image, title, text }) => {
  const [video, setVideo] = useState([]);
  const API_KEY = "b179811e5f77d94db361d570b9dea8e7";

  const fetchVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
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
        <h1 className="text-white w-full text-8xl font-bold">{title}</h1>
        <p className="text-xl">{text}</p>
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
                    {Array.from(video).filter(
                      (trail) => trail.type === "Trailer"
                    ).length > 1
                      ? index + 1
                      : ""}
                  </a>
                </>
              </>
            ))}
        </div>
      </div>
      <div className="overflow-hidden w-full h-screen">
        <img src={image} alt={title} className="w-screen"></img>
      </div>
    </section>
  );
};

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default HeroImage;
