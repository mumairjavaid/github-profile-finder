import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import User from './components/User'
import Repos from './components/Repos'

const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/user/:userId' element={<User />}/>
      {/* <Route path='/users/:userId/repos' element={<Repos/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App