import './Urun.css'

//PROPS ILE CALISMAK 
function Urun(/*3. YONTEM*/ {className,baslik,id,urunAdi,adet,content}) {
  
  // 2.YÖNTEM
  // const {className,baslik,id,urunAdi,adet,content}= props
  // seklinde bir degisken tanımlayıp, return içinde props. diye yazmadan da çağırabiliriz.

  return (
    <>

    <div className= {className}>
      <h2 className= {baslik}> {id}. Urun Adi </h2>
      <p className= {content}> {urunAdi} - Adedi: {adet} </p>
    </div>
    
    </>
    
  )
}

export default Urun