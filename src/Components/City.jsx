import { useState, useEffect } from "react";
import axios from "axios";

export const City = () => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [city, setCity] = useState("");
  const api = `219129ee37e58d8b52ff71f8047ecd1b`;
  const api_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
  const req = `${api_endpoint}lat=${lat}&lon=${lon}&appid=${api}`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      axios.get(req).then((res) => {
        setCity(res.data.name);
      });
    });
  }, [lat]);
  return <div>{city}</div>;
};