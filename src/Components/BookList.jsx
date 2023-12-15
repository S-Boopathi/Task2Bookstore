import React, { useEffect, useState } from 'react'
import '../App'
import { API_URL } from '../API'
import axios from 'axios'
import { useAppcontext } from './Context/appcontext'
import { useNavigate } from 'react-router-dom'
function BookList() {
    const [books,setBooks]=useState([]);
    const {favorites,addToCart,removeFromCart}=useAppcontext();
    const navigate =useNavigate();
    const cartchecker =(id)=>{
        const boolean =favorites.some((book)=>book.id ===id)
        return boolean ;
    }
    useEffect(()=>{
        axios.get(API_URL)
        .then(res=>{
            console.log(res.data);
            setBooks(res.data)
        }).catch(err=>console.log(err))
    },[])
  return (
    <div className='book-list'>
        {
            books.map((book)=>(
                <div key={book.id} className='book'>
                    <div><h4>{book.title}</h4></div>
                    <div><img src={book.image_url} alt="#" onClick={()=>navigate(`/books/${book.id}`)}/></div>
                    <div><h3>Price:{book.num_pages}$</h3></div>
                    <div>
                    {
                        cartchecker(book.id)? (
                        <button onClick={()=>removeFromCart(book.id)}>Remove from cart </button>
                        ):(
                    <button onClick={()=>addToCart(book)}>ADD to cart <i class="bi bi-bag-plus-fill"></i></button>
            )}
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default BookList