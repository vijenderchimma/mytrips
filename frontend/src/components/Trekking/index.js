import { useEffect, useState } from "react"
import axios from "axios"
import TripsData from "../TripsData"
import Header from "../Header"

import './index.css'

const Trekking = () => {
    const [trekkingData,setTrekkingData] = useState([])

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await axios.get("http://localhost:3001/trekking")
                console.log(response.data)
                setTrekkingData(response.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])

    return (
        <>
        <Header/>
        <div className="trekking-container">
            <h1>Trekking</h1>
            <ul className="list-container">
                {trekkingData.map(eachData=>(
                    <TripsData eachData = {eachData} key = {eachData._id} />
                ))}
            </ul>
        </div>
        </>
    )
}

export default Trekking