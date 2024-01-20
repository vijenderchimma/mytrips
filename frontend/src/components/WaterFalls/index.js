import { useEffect, useState } from "react"
import axios from 'axios'

import TripsData from '../TripsData'
import Header from "../Header"


const Waterfalls = () => {

   const [WaterfallsData,setWaterfallsData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:3001/waterfalls");
            console.log(response.data);
            setWaterfallsData(response.data)
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchData();
      }, []);

    return (
        <>
        <Header/>
        <div className="waterfalss-container">
            <h1>Waterfalls</h1>
            <ul className="list-container">
                {WaterfallsData.map(eachData=>(
                    <TripsData eachData = {eachData} key = {eachData._id} />
                ))}
            </ul>
        </div>
        </>
    )

}

export default Waterfalls