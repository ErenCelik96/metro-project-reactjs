import React, { useState, useEffect } from "react";

export default function Form() {
  const [targetStation, setTargetStation] = useState();
  const [currentStation, setCurrentStation] = useState();
  const [direction, setDirection] = useState();
  const [duration, setDuration] = useState(0);
  const [stations, setStations] = useState([]);

  useEffect(() => {
    let url = "http://localhost:3000/stations";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => setStations(result));
  }, []);

  function handleChange1(event) {
    setTargetStation(event.target.value);
  }

  function handleChange2(event) {
    setCurrentStation(event.target.value);
  }

  function handleChange3(event) {
    setDirection(event.target.value);
  }

  function handleClear() {
    setTargetStation("");
    setCurrentStation("");
    setDirection("");
    setDuration(0);
  }

  function handleResult() {
    if (direction === "Kadıköy yönü") {
      setDuration((currentStation - targetStation) * 2);
    } else {
      setDuration((targetStation - currentStation) * 2);
    }
  }

  return (
    <div className="form d-flex align-items-center justify-content-center">
      <div className="form-container">
        <label for="exampleFormControlSelect1">Gidilecek Yön</label>
        <select
          name="direction"
          onChange={(e) => handleChange3(e)}
          className="form-control mb-5"
          id="exampleFormControlSelect1"
          value={direction}
        >
          <option value="">Lütfen gitmek istediğiniz yönü seçiniz..</option>
          <option value="Kadıköy yönü">Kadıköy yönü</option>
          <option value="Tavşantepe yönü">Tavşantepe yönü</option>
        </select>
        <label for="exampleFormControlSelect1">Bulunduğunuz Durak</label>
        <select
          name="currentStation"
          onChange={(e) => handleChange2(e)}
          className="form-control mb-5"
          id="exampleFormControlSelect1"
          value={currentStation}
        >
          <option value="">Lütfen bulunduğunuz durağı seçiniz..</option>
          {stations.map((station) => (
            <>
              <option key={station.id} value={station.id}>
                {station.stationName}
              </option>
            </>
          ))}
        </select>
        <label for="exampleFormControlSelect1">Gidilecek Durak</label>
        <select
          name="targetStation"
          onChange={(e) => handleChange1(e)}
          className="form-control mb-5"
          id="exampleFormControlSelect1"
          value={targetStation}
        >
          <option value="">Lütfen gitmek istediğiniz durağı seçiniz..</option>
          {stations.map((station) => (
            <>
              <option key={station.id} value={station.id}>
                {station.stationName}
              </option>
            </>
          ))}
        </select>
        <button
          id="result-btn"
          class="bg-success"
          type="button"
          onClick={() => handleResult()}
        >
          SORGULA
        </button>
        <button id="result-btn" type="button" onClick={() => handleClear()}>
          BİLGİLERİ SIFIRLA
        </button>
        <p id="result" className="text-white">
          {duration === 0
            ? `Hoşgeldiniz. Başlamak için lütfen yön ve durak seçimi yapınız.`
            : duration < 0
            ? "Hatalı durak girişi! Lütfen tekrar deneyiniz."
            : `Ortalama ${duration} dakika sonra gitmek istediğiniz durağa varacaksınız.`}{" "}
          <br /> İyi yolculuklar dileriz..
        </p>
      </div>
    </div>
  );
}
