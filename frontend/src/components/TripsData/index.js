import './index.css'

const TripsData = (props) => {
    const {eachData} = props

    return (
        <li className='list-item'>
            {eachData.img ?
                <img src = {eachData.img} alt = {eachData.name} className="image" />: "" }
                <div className='content-container'>
                    <h1 className='name'><span className='span'>Name: </span>{eachData.name}</h1>
                    <p className='state'><span className='span'>State: </span>{eachData.state}</p>
                    <p className='district'><span className='span'>District: </span>{eachData.district}</p>
                    {eachData.description ? <p className='description'><span className='span'>Description: </span> {eachData.description}</p> : ""}
                    <button className="know-more-button">Know More</button>
                </div>
        </li>
    )
}

export default TripsData