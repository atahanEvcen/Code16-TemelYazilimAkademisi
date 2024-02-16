import React from 'react'
import ImgThumbnail from './ImgThumbnail'

function Card({title,imgSrc,imgAlt,children,...rest}) {

    const cardStyle = {
        padding:"10px",
        border:"5px solid black",
        boxSizing:"border-box",
        marginBottom:"5px",
        borderRadius:"10px",
        alignment:"right",
    }
  return (
    <div style={cardStyle}>

        <ImgThumbnail imgSrc={imgSrc} alt={imgAlt}/>
        <h2>{title}</h2>
        <h3> Id: {rest.dataId} </h3>
        <h3> RestDeneme: {rest.restDeneme} </h3>

        {children}
      
    </div>
  )
}

export default Card
