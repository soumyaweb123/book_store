import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksCard from '../components/BooksCard';
import BooksTable from '../components/BooksTable';
const Home = () => {
    const [books,setBook]=useState([]);
    const [loading,setLoading] =useState(false);
    const [showtype,setShowType]=useState('table');

    useEffect(()=>{
        setLoading(true);
        axios
    .get('http://localhost:3001/books')
    .then((res)=>{
        setBook(res.data.data);
        setLoading(false);
    })
    .catch((error)=>{
        console.log(error);
        setLoading(false);
    })

        
    },[])
  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={()=>setShowType('table')}>
      Table</button>
      <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={()=>setShowType('card')}>
      Card</button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl m-8'>book list</h1>
        <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl"/>
        </Link>
      </div>
      
      
      {loading ? <Spinner/>: showtype === "table" ?(<BooksTable books={books}/> ):(<BooksCard books={books}/>)}
      
      
    </div>
  )
}

export default Home
