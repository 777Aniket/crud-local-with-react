
import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom"
import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'
//import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>

      <div className='container'>
       <Routes>
          <Route path='/' element={<EmployeeList/>}/>
          <Route path='/create-employees' element={<EmployeeForm/>}/>
          <Route path='/edit-employees/:id' element={<EmployeeForm/>}/>
        </Routes>
      
        </div>
    </div>
  )
}

export default App

