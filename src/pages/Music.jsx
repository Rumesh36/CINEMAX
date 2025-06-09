import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { FaRandom } from "react-icons/fa";
import Img1 from "../assets/Img/Oohalu_Gusagusalade_poster.webp";
import Img2 from "../assets/Img/agnyaathavaasi.webp";
import song1 from "../assets/Songs/songs1.mp3";
import song2 from "../assets/Songs/song2.mp3";
import song3 from '../assets/Songs/cornfieldChase.mp4'
import song4 from '../assets/Songs/chiru.mp4'
import song5 from '../assets/Songs/Diewithasmile.mp4'
import song6 from '../assets/Songs/Galagala.mp4'
import song7 from '../assets/Songs/interstellarpianover.mp4'
import song8 from '../assets/Songs/khonchemKohonchem.mp4'
import song9 from '../assets/Songs/Make you mine.mp4'
import song10 from '../assets/Songs/middleofthenights.mp4'
import song11 from '../assets/Songs/wannabeurs.mp4'
import song12 from '../assets/Songs/ne yadalo.mp4'
import Img3 from '../assets/Img/cornfield.Webp'
import Img4 from '../assets/Img/Awara.webp'
import Img5 from '../assets/Img/img5.webp'
import Img6 from '../assets/Img/img6.webp'
import Img7 from '../assets/Img/img7.webp'
import Img8 from '../assets/Img/img8.webp'
import Img9 from '../assets/Img/img9.webp'
import Img10 from '../assets/Img/img10.webp'
import Img11 from '../assets/Img/img12.webp'




const Songs = [
  { title: "Em Sandheham Ledhu",   src: song1, img: Img1 },
  { title: "Bayatokochi Chustey",  src: song2, img: Img2 },
  { title: "cornfield Chase",      src: song3, img: Img3 },
  { title: "chiru chiru",          src: song4, img: Img4 },
  { title: " Die with a smile",    src: song5, img: Img5 },
  { title: " Galagala",            src: song6, img: Img6 },
  { title: "interstellar piano version ", src: song7, img: Img7 },
  { title: " khonchem Kohonchem",      src: song8, img: Img8 },
  { title: " Make you mine",           src: song9, img: Img9 },
  { title: " middle of the nights",    src: song10, img: Img10 },
  { title: " I wanna be yours",        src: song11, img: Img11 },
  { title: "Ne yadalo na chotey evuu ", src: song12, img: Img4 },
  
];

const TimeFormat = (sec) => {
  if (isNaN(sec)) return "0:00";
  const minutes = Math.floor(sec / 60);
  const second = Math.floor(sec % 60);
  return `${minutes}:${second < 10 ? "0":""}${second}`;
};

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [currentIndex, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateTime);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentIndex((next) => (next + 1) % Songs.length);
    setIsPlaying(true);
  };

  const playPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + Songs.length) % Songs.length);
    setIsPlaying(true);
  };
   const randomSong = () =>{

   const random = Math.floor(Math.random()*Songs.length);
   setCurrentIndex(random);
    setIsPlaying(true);
    console.log(random);
    
   }

  const SelectedSongs = (index) => {
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const value = parseFloat(e.target.value);
    if (!audio) return;
    audio.currentTime = value;
    setCurrentTime(value);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-200 to-gray-500 transition-all pt-20  ">
      <div className="bg-gray-100 mx-auto rounded-2xl shadow-2xl p-6 space-y-4 w-[350px] md:w-[800px] md:h-auto ">
        <h2 className="text-center text-lg font-semibold text-gray-700">
         {isPlaying ? " 🎵 Now Playing" :" The song Paused.. "}
        </h2>
        {/* background image */}
        <div className="w-60 h-60 md:w-130 md:h-130 mx-auto overflow-hidden rounded-2xl shadow">
          <img
            src={Songs[currentIndex].img}
            alt={Songs[currentIndex].title}
            className="w-full h-fit object-cover border-amber-50"
          />
        </div>
        <p className="text-center text-xl  text-gray-800 font-semibold">
          {Songs[currentIndex].title}
        </p>
        {/* random songs  */}
        <div className="flex  justify-end mr-3 ">
          <button onClick={randomSong}
          className="text-2xl"><FaRandom/></button>
        </div>
        {/* seekk bar */}
        <div className="">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-2 rounded-lg cursor-pointer bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 accent-pink-600"
          />
        </div>
        {/* timer */}
        <div className="flex ml-1 justify-between text-sm text-gray-600 mr-1 -mt-2">
          <p>{TimeFormat(currentTime)}</p>
          <p>{TimeFormat(duration)}</p>
        </div>

        {/* controlsss */}
        <div className="flex justify-between items-center text-3xl px-6 text-gray-700">
          <button onClick={playPrev}>
            <GiPreviousButton />
          </button>
          <button onClick={togglePlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={playNext}>
            <GiNextButton />
          </button>
        </div>

        {/* songs list  */}
         <h3 className="text-xl font-semibold ml-2">Our Playlist &hearts;</h3>
        <div className="  h-80 overflow-scroll bg-white rounded-2xl px-auto ">
         
          <ul className="flex flex-col gap-2">
            {Songs.map((song, index) => (
              <li
                key={index}
                onClick={() => SelectedSongs(index)}
                className={`p-2 rounded-lg cursor-pointer text-md font-semibold transition-all flex items-center gap-3 ${
                  index === currentIndex
                    ? "bg-red-300 text-red-700"
                    : "hover:bg-gray-300 text-gray-600"
                }`}
              >
                <img src={song.img} alt={song.title}
                className="w-10 h-13 rounded-lg object-cover flex-shrink-0" />
                
                {song.title}
              </li>
            ))}
          </ul>
        </div>
        <audio ref={audioRef} src={Songs[currentIndex].src} />
      </div>
    </div>
  );
};

export default Music;
