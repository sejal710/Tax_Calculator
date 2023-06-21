
import './App.css'
import AdvanceTax from './Components/AdvanceTax'
import Footer from './Components/Footer';
import Hometax from './Components/Hometax';
import Navbar from './Components/Navbar'
import {useState} from 'react'

function App() {
  const [open,setOpen] = useState(true);
  return (
    <div className='app'>
     <Navbar setOpen={setOpen} open={open}/>
     <div className='data'>
       {open === true ? <Hometax /> : <AdvanceTax />}
     </div>
     <Footer />
    </div>
  )
}

export default App
