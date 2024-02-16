import React,{useState} from 'react'
import ImgThumbnail from './ImgThumbnail';

function MultipleImages() {

    const [imageCounter, setImageCounter]= useState(0)

    function handleClick (event)  
    {

        console.log(event.target.id);

        event.target.id=="ekle"?
            setImageCounter(say=>say+1):
            setImageCounter(say=>say>1 ? say-2:say)

    }

  return (

    <>

    
    
    
    <button id="ekle" onClick={handleClick}>Yeni Gorsel Ekle</button>
    <button id="sil" onClick={handleClick} >Gorsel Sil</button>

    <hr />

    {

        [...Array (imageCounter)].map((item,index)=> <ImgThumbnail key={index}
        imgSrc={`https://picsum.photos/id/${200 +index}/150/150`}/>)
    }
    
    
    </> 

  
  )
}

export default MultipleImages
