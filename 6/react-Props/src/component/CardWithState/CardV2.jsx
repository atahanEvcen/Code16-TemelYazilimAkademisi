import React, {useState} from 'react'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'



function CardV2() {
    
    
    const [like, setLike]= useState(0)

    function handleClick () {

        setLike(prev=> prev+1) //prev: önceki değer anlamında
    }
 
  return (
    <div 
    style=
    {
        {
            margin: "auto",
            backgroundColor: "gray",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "300px",
            height: "310px",
            border: "1px solid black"
        }
    }>

        <CardHeader like={like}/>

        <button onClick={handleClick} > Like {like} </button>
        <ul>
            <li>Lorem, ipsum.</li>
            <li>Soluta, eius?</li>
            <li>Nostrum, sequi?</li>
            <li>Vitae, necessitatibus?</li>
        </ul>

        <CardFooter like={like}  setLike={setLike} handleClick={handleClick} />
      
    </div>
  )
}

export default CardV2
