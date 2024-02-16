import React from 'react'
import Urun from './component/Urun'
import {IMAGES,INFO} from './data'
import ImgThumbnail from './component/ImgThumbnail';
import Card from './component/Card';
import SartliRendering from './component/SartliRendering';

export default function App() {
  return (
    <>
    <Urun content="content" baslik="baslik" className="urun" id="1" adet="85" urunAdi="Bilgisayar"/>
    <Urun content="content" baslik="baslik" className="urun" id="2" adet="102" urunAdi="Cep Telefonu"/>
    <Urun content="content" baslik="baslik" className="urun" id="3" adet="93" urunAdi="Tablet"/>
    <Urun content="content" baslik="baslik" className="urun" id="4" adet="108"urunAdi="Kulaklık"/>
    <hr />

    

    <h3 className='h3'>6.2 Props Kullanımı-2</h3>

    {
      IMAGES.map((item,index)=> <ImgThumbnail imgSrc={item} key={item} imgAlt=""/> )
    }

    <hr />

    <h3 className='h3'>6.3-6.4 Children Props Kullanımı</h3>

<Card
    restDeneme="1"
    dataId="1" 
    title="Baslik1" 
    imgSrc="https://picsum.photos/id/85/200/200" 
    imgAlt="Card Bilgisi">
        <p>Lorem, ipsum dolor.</p>
        <p>Est, necessitatibus rem.</p>     {/* props children olarak ekledik. */}
        <p>Nostrum, voluptatum odit!</p>
    </Card>

    <Card
    restDeneme="2"
    dataId="2"  
    title="Baslik2" 
    imgSrc="https://picsum.photos/200/200" 
    imgAlt="Card Bilgisi">
        <p>Lorem, ipsum dolor.</p>
        <p>Est, necessitatibus rem.</p>     {/* props children olarak ekledik. */}
        <p>Nostrum, voluptatum odit!</p>
    </Card>

    <hr />

    <h3 className='h3'>6.6 Sartli Rendering</h3>

    <SartliRendering isActive={true}  isLoading={false} />
    

    <h3 className='h3'>6.7 Optional Chain </h3> {/* Başka bir dosyada tanımlanmış değişkenin özniteliklerini
                                                    çağırırken mesela yanlış yazdık. ? ile kodu patlatmıyoruz. */}
    {
    INFO.products?.map((product,i)=> <li key={i}>{product}</li>) // productsss yazsa idik kod çalışacaktı.
    }

    



    <hr />
    
    </>
  )
}
