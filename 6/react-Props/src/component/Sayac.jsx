import {useState} from 'react'

function Sayac() {

    const [sayac, setSayac] = useState(0)

    function handleClick ()  {

        console.log("clicked")
        setSayac(sayac+1)
        console.log(sayac)
    }

  return (
    <div>
      <h2> 6.8 State Konusu Bu sayfada işlenecek.</h2>
      <h2> Sayac: {sayac} </h2>
      <button onClick={handleClick}> Sayaci 1 Artir </button> {/* handleClick fonksiyonu gibi fonks tanımlanıp burada da çağırılabilir. */}
      
      <button onClick={()=> setSayac(sayac*2)}> sayaci x2 olarak artir </button>                                                               
    </div>
  )
}

export default Sayac
