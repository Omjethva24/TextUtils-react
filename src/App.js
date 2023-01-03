import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form'
// import About from './components/About'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom's


function App() {

  const mode = () =>{
    let a;
    document.body.style.background==="white"?a="dark":a="light";
    return a;
  }
  return (
 <>
  {/* <Router> */}
    <Navbar title="om" mode={mode} value="Enter some text here....." />
    <Form/>
   
   {/* <Routes>
        <Route  path="/" element={<Form />} />
        <Route  path="/home" element={<Form />} />
        <Route path="/about"  element={<About/>} />
       
          
        </Routes>
     </Router> */}
  
    
 </>
  );
}

export default App;

