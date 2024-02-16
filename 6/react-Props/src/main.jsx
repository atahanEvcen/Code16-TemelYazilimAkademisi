import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> App'i çalıştırmak için yorum satırından çıkarmak yeterli. Şu an App2 aktif. */}
    <App2 />
  </React.StrictMode>,
)
