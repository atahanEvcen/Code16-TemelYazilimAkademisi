import { useState } from 'react'
import './App.css'
import { UserList,SingleUserList } from './components/UserList'


function App() {

  //Değişkenler burada tanımlanır.

  let username = "Atahan"
  let users = ["Atahan", "Aleyna", "Şahan","Hilalnur", "Kağan","Timur","Atahan "]

  let mapUsers = users.map((user,i)=> <li key={i}> {user} </li>)

  const isActive = true

  const headStyles = { 
    h2styles: {backgroundColor:"red",color:"white"}
  }


  const products = [
    {id:"1", name:"macbook pro 14", inStock:false, price:"1250"},
    {id:"2", name:"iphone 12", inStock:true, price:"800"},
    {id:"3", name:"iphone 11", inStock:true, price:"900"},
    {id:"4", name:"iphone 13", inStock:false, price:"1000"},
    {id:"5", name:"iPad", inStock:true, price:"800"},
    ]


  return ( //yapısı mutlaka böyle olacak <>..</> HTML gibi ama değil.
    <>
      <h3 style={ {backgroundColor: `${isActive?"green":"orange"}`}}>Merhaba {users} </h3>  {/* `${}` ile js kodu yazdık, 
                                                                                                 ?->eğer doğruysa green, değilse orange */}

      <h3>şu anda burada {users.length} kişisiniz. </h3>
      <img src="https://fastly.picsum.photos/id/421/200/300.jpg?hmac=uS2eM0G0F1Jupud0-BfxxJpQ3_kL8LFMxr6EHhop69o" alt="" />

      <hr />  

      <div> <h2 style={headStyles.h2styles}>Tanımlanan kullanıcıları sırayla yazdırma</h2> </div> {/* headStyles'i çağırdık*/}
      
      <ul> {users.map((user,index)=> <li key={index}> {user} </li> ) } </ul> 
      {/* users değişkenindeki tüm elemanları alt alta listeliyor.*/}

      <hr />

      <div className='bg-red'> Yeni Alan</div>


      <hr />

      <div> <h2>Tanımlanan kullanıcıları yeni yöntemle yazdırma</h2> </div>
      <ul>
        {mapUsers}
      </ul>

      <hr />
      <div> <h2>Yeni denemeler</h2> </div>
      <ul style={{backgroundColor:"gray",margin:0, padding:0 , }}> {/*liste stillerine obje ekleyerek müdehale ettik.*/}
        {mapUsers}
      </ul>

      <hr />

      <h2> Stoktaki ürünler </h2>
      <ul>
        {
          products
          .filter(item=>item.inStock)
          .map(item=>
             <li key={item.id}> ID: {item.id} - NAME: {item.name.toUpperCase()} - PRICE: {item.price}  </li>)
        }
      </ul>

      <hr />

      <h4>Yeni Resim Yeni Component ile Çağırma</h4>

      <ImgThumbnail/> {/* component böyle çağırılır. mainde de böyle çağırılabilir*/}

      <hr />

      <h4>aynı dizin içinde components klasöründen components çağırma işi</h4>
      <UserList/>

      <hr />

      <SingleUserList/>





    </>
  ) // {} içinde yazılan her şeyi JS olarak algılar 
}

function ImgThumbnail() {
  return (
    <img src="https://fastly.picsum.photos/id/421/200/300.jpg?hmac=uS2eM0G0F1Jupud0-BfxxJpQ3_kL8LFMxr6EHhop69o" alt="" style={{padding:"4px", margin:"0",borderRadius:"15px", border:"10px"}} 
    />
  )

} 


export default App
