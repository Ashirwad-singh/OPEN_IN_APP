import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Redirect from './Components/Redirect'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
         <Route path='/go/:id' element={<Redirect/>}></Route>
      </Routes>
      
    </Router>
  )
}

export default App

