import { useState } from 'react'
import './App.css'
import { Hakkimda } from '../components/Hakkimda'
import { ImgThumbnail } from '../components/ImgThumbnail';
import { Deneyim } from '../components/Deneyim';
import { Egitim } from '../components/Egitim';
import { ProjeAktivite } from '../components/ProjeAktivite';


function App() {

  const headStyles = { 
    h1styles: {backgroundColor:"#641200",color:"white",textAlign:"center",strokeThickness:"10px"},
    h2styles: {backgroundColor:"gray",color:"white",textAlign:"center",},
    h3styles: {backgroundColor:"blue",color:"white",textAlign:"center"},
  }

  return (
    <>
    <div> <h1 style={headStyles.h1styles}>Atahan EVCEN Blog Sayfasi </h1>
    </div>
    <ImgThumbnail/>

    
    <div> <h2 style={headStyles.h2styles}>Hakkimda</h2></div>
    <Hakkimda/>
    <ImgThumbnail/>

    <div className="row" >
      <div className='column'>
        <h2 style={headStyles.h2styles}>Egitim</h2>
        <Egitim/>
      </div>

      <h6>--</h6>

      <div className='column'>

        <h2 style={headStyles.h2styles}>Deneyim</h2>
        <Deneyim/> 
      </div>
    </div>

    <ImgThumbnail/>

    <div> <h2 style={headStyles.h2styles}>Proje ve Aktiviteler</h2></div>
    <ProjeAktivite/>
    
    </>
  );
}

export default App
