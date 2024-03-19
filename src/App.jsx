


import './App.css'
import NavBar from './components/DaisyNav/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  

  return (
    <>
     <NavBar></NavBar>
     {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl'>Vite + React</h1>
      <PriceOptions></PriceOptions>
     
      
    </>
  )
}

export default App
