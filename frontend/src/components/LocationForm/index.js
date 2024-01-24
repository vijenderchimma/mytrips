import {useState} from 'react'
import axios from 'axios'

import './index.css'
import Header from '../Header'

const LocationForm = () => {
    
    const [name,setName] = useState()
    const [district,setDistrict] = useState()
    const [state,setStateValue] = useState()
    const [img,setPhoto] = useState()
    const [description,setDescription] = useState()
    const [option,setOption] = useState('waterfalls')
    const [url,setLocation] = useState()

    const onchangeName = event => {
        setName(event.target.value)
    }

    const onChangeOption = e => {
        setOption(e.target.value)
    }
    
    const onChangeDistrict = e => {
        setDistrict(e.target.value)
    }

    const onChangeState = e => {
        setStateValue(e.target.value)
    }

    const onChangeDescription = event => {
        setDescription(event.target.value)
    }

    const onChangePhoto = e => {
        console.log(e)
        var reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload= () =>{
          setPhoto(reader.result)
          console.log(reader.result)
        }
        reader.onerror = (err) => {
          console.log(err)
        }
    
      }

      const onChangeLocation = event =>{
        setLocation(event.target.value)
      }


    const onSubmitData = async (e) =>{
        e.preventDefault()

        const tripDetails = {name,state,district,img,description,url}
        const headers = {
            'Content-Type': 'application/json',
          };

        let selectedOption;

        if(option === 'waterfalls'){
            selectedOption = option
        }
        else if(option === 'temples'){
            selectedOption = option
        }
        else{
            selectedOption = option
        }
        console.log(option)

        try {
            const response = await axios.post(`http://localhost:3001/${selectedOption}`,tripDetails,{headers})
            if (response && response.status === 200) {
                console.log('User details posted successfully:', response.data);
            }
        }catch(err){
            console.log(err)
        }

        setDescription('')
        setDistrict('')
        setStateValue('')
        setLocation('')
        setName('')
        setPhoto('')
    }
    


    return (
        <>
        <Header />
        <div className='trips-form-container'>
            <h1 className='trips-form'>TripsForm</h1>
            <form className='form-container' onSubmit={onSubmitData}>
                <label htmlFor='name' className='label'>Name:</label>
                <input type = "text" value = {name} className='user-input' id = "name" placeholder='Enter Location Name' onChange={onchangeName} />
                <label htmlFor='district' className='label'>District:</label>
                <input type = "text" value={district} className='user-input' id = "district" placeholder='Enter Location District' onChange={onChangeDistrict} />
                <label htmlFor='state' className='label'>state:</label>
                <input type = "text" value={state} className='user-input' id = "state" placeholder='Enter Location State' onChange={onChangeState} />
                <label htmlFor='description' className='label'>Description:</label>
                <textarea col ="50" row ="5"  value={description} className='user-input' id = "description" placeholder='Enter Location Description' onChange={onChangeDescription}></textarea>
                <label htmlFor='category' className='label'>Category:</label>
                <select className='user-input' id = "category" value={option} onChange={onChangeOption}>
                    <option>waterfalls</option>
                    <option>temples</option>
                    <option>trekking</option>
                </select>
                <label htmlFor='url' className='label'>Location URL:
                <input type = "text" className='user-input' value = {url} onChange = {onChangeLocation} placeholder= "Enter Location Url"/></label>
                <label className='label'>Photo:
                <input type="file" name="photo" className='file' accept = "image/" onChange={onChangePhoto} />
                <span className='photo-size'>*Photo should be less than 50KB</span>
                </label>
                {img == "" || img == null? "" : <img width={100} height={100} alt = "name" src = {img} />}<br />
                <button type ="submit" className='submit-button'>Submit</button>
            </form>
        </div>
        </>
    )
}

export default LocationForm