import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = ''

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({lat: 0, lng: 0})
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`

  useEffect( () => {
    const apiCall = async () => {
      const response = await axios(API)
      setMap(response.data.results[0].geometry.location)
    }
    apiCall()
  }, [])
  return map
};

export default useGoogleAddress