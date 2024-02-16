import React, { useState } from 'react';
import Sonuc from './Sonuc';
import DegInput from './DegInput';
import DegConvBut from './DegConvBut';

function DegConv() {
  const [derece, setDerece] = useState('');
  const [sonuc, setSonuc] = useState('');

  function handleClick(event) {
    const inputValue = parseFloat(derece);

    if (!derece.trim()) {
      alert("Lütfen bir derece değeri girin.");
      return;
    }

    if (event.target.id === 'kel') {
      const kelvinSonuc = (inputValue + 273).toFixed(2);
      setSonuc(`Sonuç: ${kelvinSonuc} °K`);
    } else if (event.target.id === 'fah') {
      const fahrenheitSonuc = ((9/5) * inputValue + 32).toFixed(2);
      setSonuc(`Sonuç: ${fahrenheitSonuc} °F`);
    }

    setDerece('');
  }

  function handleChange(event) {
    const inputValue = event.target.value;
    setDerece(inputValue);
  }

  return (
    <div className="jumbotron" >
      <h3 className='baslik'>Sıcaklık Dönüştürücü</h3>
      <DegInput value={derece} onChange={handleChange} />
      <hr /> <b></b>
      
      <div role="group" style={{width:"75%",margin:"auto",display:"flex"}}>,
        <DegConvBut onClick={handleClick} id='kel' text="Kelvin'e Çevir" />
        <DegConvBut onClick={handleClick} id='fah' text="Fahrenheit'a Çevir" />
      </div>
      <hr />
      <b></b>
      <div style={{alignText:"auto"}}>
      <h3> <Sonuc sonuc={sonuc} /> </h3>
      </div>
    </div>
  );
}

export default DegConv;