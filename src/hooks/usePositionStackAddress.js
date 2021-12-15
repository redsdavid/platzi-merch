import { useState, useEffect } from "react";
import axios from "axios";

const usePositionStackAddress = address => {

    const API_KEY = process.env.POSITION_STACK_KEY.toString();
    const [map, setMap] = useState({});
    const API = `http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${address}`

    useEffect(async () =>{
        const response = await axios(API);
        const location = {
            "lat" : response.data.data[0].latitude,
            "lng" : response.data.data[0].longitude
        }

        console.log("usePositionStackAddress" + typeof location.lat)
        console.log(location)
        setMap(location);
    },[]);
    return map;
};

export default usePositionStackAddress;