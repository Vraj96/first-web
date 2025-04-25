
import { useState } from 'react';
import './App.css';

function App() {


  let [status,setStatus]=useState(false)
  let [menuStatus,setMenustatus]=useState(false)
  let [modelstatus,setModelStatus]=useState(false)


  return (
    <div className="App">

      <button className='en' onClick={()=>setModelStatus(true)}>Enquiry Now</button>


        <div onClick={()=>setModelStatus(false)} className={`modeloverlay ${modelstatus ? 'modalShow' : ''}` }></div>
        <div className={`modelDiv ${modelstatus ? 'showmodalShow' : ''}` }>
          <h3>Enquiry Now <span onClick={()=>setModelStatus(!modelstatus)}>&times;</span></h3>
        </div>





        <button className='micon' onClick={()=>setMenustatus(!menuStatus)}>&#9776;</button>

      <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact US</li>
            <li>Products</li>
          </ul>
      </div>


    <input className='border-4 border-black m-4' type={status ? 'text' : 'password'} />
    <button className= 'bg-gray-500 text-white p-2 m-4' onClick={()=>setStatus(!status)}>
      {status ? 'hide' : 'Show'}
    </button>
    </div>
  );
}

export default App;
