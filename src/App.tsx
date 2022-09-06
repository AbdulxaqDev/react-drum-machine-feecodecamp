import React, { useEffect, useState } from "react";
import "./App.css";
import Heater_1 from "./assets/sunds/Heater-1.mp3";
import Heater_2 from "./assets/sunds/Heater-2.mp3";
import Heater_3 from "./assets/sunds/Heater-3.mp3";
import Heater_4 from "./assets/sunds/Heater-4.mp3";
import Clap from "./assets/sunds/Clap.mp3";
import Open_HH from "./assets/sunds/Open-HH.mp3";
import Kick_n_Hat from "./assets/sunds/Kick_n_Hat.mp3";
import Kick from "./assets/sunds/Kick.mp3";
import Closed_HH from "./assets/sunds/Closed-HH.mp3";

function App() {
  const [soundTitle, setSoundTitle] = useState("welcome");
  const [volume, setVolume] = useState(50);
  const [power, setPower] = useState(true);

  const playAudio: Function = (id: string, soundTitle: string): void => {
    const audio: any = document.getElementById(`${id}`);
    audio.volume = volume / 100;
    if(power) audio.play();
    setSoundTitle(soundTitle);
  };

  const volumeCntrl = (event: React.FormEvent<HTMLInputElement>) => {
    setVolume(Number(event.currentTarget.value));
  };

  const powerCntrl = () => {
    setPower(!power);
  };

  let soundSources: readonly any[] = [
    Heater_1,
    Heater_2,
    Heater_3,
    Heater_4,
    Clap,
    Open_HH,
    Kick_n_Hat,
    Kick,
    Closed_HH,
  ];
  let audioIds: readonly string[] = [
    "Q",
    "W",
    "E",
    "A",
    "S",
    "D",
    "Z",
    "X",
    "C",
  ];
  let podIds: string[] = [
    "heater-1",
    "heater-2",
    "heater-3",
    "heater-4",
    "clap",
    "open-hh",
    "kick-n-hat",
    "kick",
    "closed-hh",
  ];

  let soundTitles: string[] = [
    "Heater 1",
    "Heater 2",
    "Heater 3",
    "Heater 4",
    "Clap",
    "Open-HH",
    "Kick-n'-Hat",
    "Kick",
    "Closed-HH",
  ];

  useEffect(() => {
    document.onkeydown = function (evt) {
      let key: string = evt.key;
      if (
        key === "q" ||
        key === "Q" ||
        key === "w" ||
        key === "W" ||
        key === "e" ||
        key === "E" ||
        key === "a" ||
        key === "A" ||
        key === "s" ||
        key === "S" ||
        key === "d" ||
        key === "D" ||
        key === "z" ||
        key === "Z" ||
        key === "x" ||
        key === "X" ||
        key === "c" ||
        key === "C"
      ) {
        playAudio(key.toLocaleUpperCase());
      }
    };
  }, []);

  useEffect(() => { if(!power) setSoundTitle('welcome') }, [power])

  return (
    <div className="App">
      <h2><a href="https://www.freecodecamp.org/">freeCodeCamp.com</a></h2>
      <div id="drum-machine">
        <div id="pads">
          {audioIds.map((audioId: string, i: number) => (
            <span key={i} className="wrapper">
              <button
                onClick={(): void => {
                  playAudio(audioId, soundTitles[i]);
                }}
                id={podIds[i]}
                className="drum-pad"
              >
                {audioId}
                <audio
                  src={soundSources[i]}
                  className="clip"
                  id={audioId}
                ></audio>
              </button>
            </span>
          ))}
        </div>
        <div id="controls">
          <div id="display">{power? soundTitle : "welcome"}</div>
          <h1>{volume}</h1>
          <input
            type="range"
            min={0}
            max={100}
            onChange={volumeCntrl}
            defaultValue={50}
            disabled={!power}
            step="1"
          />
          <div id="power" onClick={powerCntrl}>
            {power ? "ON" : "OFF"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
