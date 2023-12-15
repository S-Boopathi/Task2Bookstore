import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import BookList from './Components/BookList'
import BookDetails from './Components/BookDetails'
import Navbar from './Components/Navbar'
import Footter from './Components/Footter'
import Favorites from './Components/Favorites'
function App() {
  return (
    <div className='App'>
    <Navbar/>
      <Routes>
        <Route path='/' element ={<BookList/>}></Route>
        <Route path='/books/:id' element ={<BookDetails/>}></Route>
        <Route path='/favorites' element ={<Favorites/>}></Route>

      </Routes>
      <Footter/>
    </div>
  )
}

export default App
