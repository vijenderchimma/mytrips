import { useEffect, useState } from "react"
import axios from 'axios'

import TripsData from '../TripsData'
import Header from "../Header"

import "./index.css"


const Temples = () => {

   const [templeData,setTempleData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:3001/gettemples");
            console.log(response.data);
            setTempleData(response.data)
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchData();
      }, []);

    return (
        <>
        <Header/>
        <div className="temple-main-container">
            <h1>Temples</h1>
            <ul className="list-container">
                {templeData.map(eachData=>(
                    <TripsData eachData = {eachData} key = {eachData._id} />
                ))}
            </ul>
        </div>
        </>
    )

}

export default Temples


