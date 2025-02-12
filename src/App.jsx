import { useState } from 'react';
import './App.css';
import avatar from './assets/image-jeremy.png';
import data from "./data.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

// Import SVG Icons
import workIcon from "./assets/icon-work.svg";
import playIcon from "./assets/icon-play.svg";
import studyIcon from "./assets/icon-study.svg";
import exerciseIcon from "./assets/icon-exercise.svg";
import socialIcon from "./assets/icon-social.svg";
import selfCareIcon from "./assets/icon-self-care.svg";

function App() {
  const [timeframe, setTimeframe] = useState("daily");

  return (
    <div className="w-full md:h-screen p-5 pt-20 md:p-0 md:pt-0 flex items-center justify-center relative" role="main">
      {/* Parent flex container gets items-stretch */}
      <div className="w-full md:w-[1110px] h-full md:h-auto flex flex-col md:flex-row overflow-hidden gap-6 items-stretch">

        {/* Left Section (Profile) */}
        <div className="w-full md:w-1/4 bg-[var(--Dark-blue)] rounded-lg flex flex-col h-full min-h-0">
          <div className="rounded-lg pb-[90px] pt-[35px] px-[30px] bg-[var(--Blue)] flex-grow">
            <img
              src={avatar}
              alt="Jeremy Robson"
              className="w-[88px] h-[88px] rounded-full object-cover border-3 border-white mb-[40px]"
            />
            <p className="text-white text-[0.8rem] mb-1">Report for</p>
            <h1 className="text-white text-4xl font-light leading-12">Jeremy Robson</h1>
          </div>

          {/* Timeframe Selection */}
          <div className="bg-[var(--Dark-blue)] text-[var(--Desaturated-blue)] p-10 rounded-bl-lg rounded-br-lg flex md:flex-col gap-4 flex-grow justify-center md:justify-start">
            <button
              onClick={() => setTimeframe("daily")}
              className={`transition cursor-pointer text-center md:text-left hover:text-white ${timeframe === "daily" ? "text-white" : ""}`}
            >
              Daily
            </button>
            <button
              onClick={() => setTimeframe("weekly")}
              className={`transition cursor-pointer text-center md:text-left hover:text-white ${timeframe === "weekly" ? "text-white" : ""}`}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeframe("monthly")}
              className={`transition cursor-pointer text-center md:text-left hover:text-white ${timeframe === "monthly" ? "text-white" : ""}`}
            >
              Monthly
            </button>
          </div>

        </div>

        {/* Right Section (Data Cards) */}
        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6 min-h-0">
          {data.map((item, index) => {
            // Map background colors based on title
            const backgroundColors = {
              "Work": "bg-[var(--Light-red-work)]",
              "Play": "bg-[var(--Soft-blue-play)]",
              "Study": "bg-[var(--Light-red-study)]",
              "Exercise": "bg-[var(--Lime-green-exercise)]",
              "Social": "bg-[var(--Violet-social)]",
              "Self Care": "bg-[var(--Soft-orange-selfcare)]"
            };

            // Map icons based on title
            const icons = {
              "Work": workIcon,
              "Play": playIcon,
              "Study": studyIcon,
              "Exercise": exerciseIcon,
              "Social": socialIcon,
              "Self Care": selfCareIcon
            };

            const bgColorClass = backgroundColors[item.title] || "bg-[var(--Dark-blue)]";
            const iconSrc = icons[item.title] || null;

            return (
              <div
                key={index}
                className={`relative rounded-lg pt-15 overflow-hidden ${bgColorClass} flex flex-col h-full`}
              >
                {/* SVG Icon Positioned at the Top Right */}
                {iconSrc && (
                  <img
                    src={iconSrc}
                    alt={`${item.title} Icon`}
                    className="absolute -top-2 right-4 w-20 h-20 z-10"
                  />
                )}

                {/* Card Content */}
                <div className="bg-[var(--Dark-blue)] relative p-6 rounded-lg flex flex-col justify-between h-full z-20">
                  <div className='flex flex-row items-center place-content-between'>
                    <h2 className="text-white text-lg font-medium">{item.title}</h2>
                    <FontAwesomeIcon icon={faEllipsisH} className='text-white hover:text-[var(--Pale-Blue)] cursor-pointer' />
                  </div>
                  <p className="text-white text-6xl font-light">{item.timeframes[timeframe].current}hrs</p>
                  <p className="text-[var(--Pale-Blue)] text-sm">
                    Last week - {item.timeframes[timeframe].previous}hrs
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default App;