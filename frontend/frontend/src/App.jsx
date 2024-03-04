import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import CreateBook from '../src/pages/CreateBook'
import DeleteBook from '../src/pages/DeleteBook'
import EditBook from '../src/pages/EditBook'
import ShowBook from '../src/pages/ShowBook'
const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/books/create' element={<CreateBook/>}/>
    <Route path='/books/delete/:id' element={<DeleteBook/>}/>
    <Route path='/books/edit/:id' element={<EditBook/>}/>
    <Route path='/books/detalis/:id' element={<ShowBook/>}/>
   </Routes>
  )
}

export default App
