import { Routes, Route} from 'react-router-dom'
import './App.css'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import NavBar from './components/NavBar'
import NewPlayerForm from './components/NewPlayerForm'
import Home from './components/Home'


function App() {
 

  return (
    <>
<NavBar />
    <Routes> 
      
      <Route path='/' element={<Home />}/>
      <Route path='/allplayers' element={<AllPlayers />}/>
      <Route path='/players/:id' element={<SinglePlayer />} />
      <Route path='/newplayers' element={<NewPlayerForm />} />
    </Routes>
    </>
  
 
  )

}



export default App
