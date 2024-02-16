import React from 'react'
import {useState} from 'react'


const DegInput = ({ value, onChange }) => {
  return (

    <label style={{textAlign:"center"}}> 
    Sıcaklık Değerinizi Giriniz {"(°C)"}
    <input style={{width:"75%",margin:"auto",display:"flex",borderRadius:"50px"}}
      type="number"
      className="form-control Hover"
      id="derece"
      placeholder=""
      value={value}
      onChange={onChange}
    />

    </label>
  );
}

export default DegInput;
