import { useState } from 'react'


function App() {

  const picturesID = [40,45,50,55,60,65,70]

  const [imgId, setImgId] = useState(picturesID[0])

  const getLoremPicsumImg = (id, width=200, height=50) => `https://picsum.photos/id/${id}/${width}/${height}`

  function resmiDegistir (id) {
    setImgId(id)
  }

  return (
    <main class="container-fluid"> 
    <hgroup>
    <h2>6.11 Mini Görsel Uygulamasi</h2>
    <p>Görsel</p>
    </hgroup>

    <img style={{width:"100%",alignItems:"center"}}
    src={getLoremPicsumImg(imgId)} 
    alt=""
    />

    <div className='grid' style={{marginTop:"30px"}}>

      {
        picturesID.map((item,index)=>
        <div key={index} style={{margin:"auto", borderColor:"white", padding:"5px"}}>
          <img
          onClick={()=> resmiDegistir(item)} 
          src={getLoremPicsumImg(item,175,150)} 
          alt={item} />
        </div>
        )
      }


    </div>
    
    
    </main>
  )
}

export default App
