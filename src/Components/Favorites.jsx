import React from 'react'
import '../App'
import { Link } from 'react-router-dom'
import { useAppcontext } from './Context/appcontext'

function Favorites() {
    
    const {favorites,addToCart,removeFromCart}=useAppcontext();
    console.log("cart are ",favorites);
    const cartchecker =(id)=>{
        const boolean =favorites.some((book)=>book.id ===id)
        return boolean ;
    }
  return (
    <div className='favorites'>
         {
          favorites.length>0? ( favorites.map((book)=>(
                <div key={book.id} className='book'>
                    <div><h4>{book.title}</h4></div>
                    <div><img src={book.image_url} alt="#" /></div>
                    <div>
                    {
                        cartchecker(book.id)? (
                        <button onClick={()=>removeFromCart(book.id)}>Remove from cart </button>
                        ):(
                    <button onClick={()=>addToCart(book)}>ADD to cart <i class="bi bi-bag-plus-fill"></i></button>
                    
            )}
            <Link to='/'> <button onClick={()=>removeFromCart(book.id)}>Confirm order</button> </Link>
                    </div>
                </div>
            ))):(
                <h1>You don't have any Cart books yet</h1>
            )
        }
       
    </div>
  )
}

export default Favorites
