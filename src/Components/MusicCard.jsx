import React from "react";

const MusicCard = () => {
  const musicData = [
    {
      image: "https://s1.dmcdn.net/v/X6bjw1d-60BrDfM1q/x1080",
      title: "Mahiya Ve!",
      singers: "Nimra Mehra",
      album: "Nimra Mehra",
    },
    {
      image: "https://i.ytimg.com/vi/jOD1tVG-4ps/maxresdefault.jpg",
      title: "Kabhi Kabhi Aditi...",
      singers: "Rashid Ali",
      movie: "Jaane Tu Ya Jaane Na",
    },
    {
      image: "https://i.ytimg.com/vi/hoOjmZv7jjo/maxresdefault.jpg",
      title: "In Lamhon Ke Daaman Mein",
      singers: "Sonu Nigam & Madhushree",
      movie: "Jodhaa Akbar",
    },
  ];

  return (
    <div className="w-full h-screen">
      <h1 className="w-full h-20 bg-zinc-400 flex items-center text-zinc-700 pl-12 font-bold">
        Music Everywhere!
      </h1>
      <div className="w-full h-198 p-5 bg-zinc-200 flex flex-row gap-8 justify-center items-center">
        {musicData.map((elem, value) => {
          return (
            <>
              <div
                key={value}
                className="w-90 px-3 py-2 bg-zinc-100 rounded-md"
              >
                <img
                  className="rounded-md w-full h-50 object-fit"
                  src={elem.image}
                  alt="Song Poster"
                />
                <h3 className="font-semibold text-xl mt-3 px-1">
                  {elem.title}
                </h3>
                <p className="text-md mt-2 px-1">
                  {elem.movie
                    ? `Movie : ${elem.movie}`
                    : `Album : ${elem.album}`}
                  <br />
                  {elem.singers === "singer"
                    ? `Singers : ${elem.singers}`
                    : `Singer : ${elem.singers}`}
                </p>
                <button className="px-4 py-2 ml-1 mb-2 mt-3 bg-blue-400 cursor-pointer drop-shadow-lg drop-shadow-cyan-500/50 font-xs text-md text-white rounded-md">
                  Play Online!
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MusicCard;
