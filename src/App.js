import React from 'react'

import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import {AuthProvider} from "./context/AuthContext"
import PrivateRoute from "./utils/PrivateRoute"
import Homepage from "./Componets/Homepage"
import Registerpage from "./Componets/Registerpage"
import Loginpage from "./Componets/Loginpaga"
import Navbar from "./Componets/Navbar"



 function App() {
  return (
    <Router>
      <AuthProvider>
      <Navbar/>
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}
 export default App
