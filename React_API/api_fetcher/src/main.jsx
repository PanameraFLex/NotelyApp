import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigator from './components/realindex.jsx'
import ApiDigest from './components/Api.jsx'
import App from './App.jsx'
// import './index.css'
import bootstrap from "bootstrap/dist/css/bootstrap.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigator />
    <ApiDigest/>
  </React.StrictMode>,
)
