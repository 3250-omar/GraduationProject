import React from 'react'

export const FeaturesComponent = (props) => {
    const {image , describtion,name,id} = props.data
  return (
    <div>
        <div className="board">
            <h3><span style={{color:'#05BFDB'}}>{id}</span>-{name}</h3>
            <img src={image} alt={name} className='FeaturesImg' style={{width:'250px' , height:'200px'}}/>
            <p>{describtion}</p>
        </div>
    </div>
  )
}
