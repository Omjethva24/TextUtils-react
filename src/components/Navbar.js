import React,{useState} from 'react'
import PropTypes from 'prop-types'
// import Form from './Form'
// import {Link} from 'react-router-dom'


export default function Navbar(props) {
 const [mode,setMode] = useState({
  "background":"#ffffff",
  "color":"black"
 })




  const myStyle = () =>{
      if(mode.background==="#ffffff"){
          setMode({
            "background":"#282545",
              "color":"#ffffff"
          })
          document.body.style.background="#282545"
          document.body.style.color="white"
          document.getElementById("textt").style.background ="gray"
        }
      else{
        setMode({
          "background":"#ffffff",
            "color":"black"
          })
          document.body.style.background="#ffffff"
          document.body.style.color="black"
          document.getElementById("textt").style.background ="#fff"
      }
     

  }
  return (
    <div className='container'>

      <nav className='navbar navbar-expand-lg' style={mode}>
        <div className="container-fluid">
          <a className="navbar-brand" style={mode} href="#"><b>TexUtisl</b></a>
           {/* eslint-disable-next-line  */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="nav-link active" aria-current="page" href="#" style={mode}>Home</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={mode}>Home</a>
                 {/* eslint-disable-next-line  */}
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#" style={mode}>About</a>
              </li>
             */}
              {/* <li className="nav-item">
                <a className="nav-link disabled" style={mode} href="#">Contact</a>
              </li> */}
            </ul>
          
          </div>
        {/* <div className="form-check form-switch  mx-3">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" style={{"backgroundColor":"green","boxShadow":"none"}} onClick={myStyle2}/>
  {/* <label className="form-check-label"htmlFor="flexSwitchCheckDefault">{mode.background==="#ffffff"?"Enabled":"Disabled"} Dark Mode</label> */}
  
  {/*<label className="form-check-label"htmlFor="flexSwitchCheckDefault" >{mode.background==="#ffffff"?"Enabled":"Disabled"} Dark Mode</label>
  </div> */}
  <div className="form-check form-switch">
  <input className="form-check-input"  type="checkbox" id="flexSwitchCheckDefault" style={{"backgroundColor":"darkblue","boxShadow":"none"}} onClick={myStyle}/>
  {/* <label className="form-check-label"htmlFor="flexSwitchCheckDefault">{mode.background==="#ffffff"?"Enabled":"Disabled"} Dark Mode</label> */}
  <label className="form-check-label"htmlFor="flexSwitchCheckDefault" >{mode.background==="#ffffff"?"Enabled":"Disabled"} Dark Mode</label>
</div>
        </div>
        
      </nav>
     
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string
}

Navbar.defaultProps = {
  title: "Tutle"
}

