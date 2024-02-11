import React from 'react'
import Urun from './component/Urun'
import {IMAGES} from './data'
import ImgThumbnail from './component/ImgThumbnail';

export default function App() {
  return (
    <>
    <Urun content="content" baslik="baslik" className="urun" id="1" adet="85" urunAdi="Bilgisayar"/>
    <Urun content="content" baslik="baslik" className="urun" id="2" adet="102" urunAdi="Cep Telefonu"/>
    <Urun content="content" baslik="baslik" className="urun" id="3" adet="93" urunAdi="Tablet"/>
    <Urun content="content" baslik="baslik" className="urun" id="4" adet="108"urunAdi="Kulaklık"/>

    <hr />

    <h3>6.2 Props Kullanımı-2</h3 >

    {
      IMAGES.map((item,index)=> <ImgThumbnail imgSrc={item} key={item} imgAlt=""/> )
    }

    </>
  )
}
