import React, { useEffect, useState } from 'react'
import ActiveBook from './ActiveBook';

const Booksdisplay = () => {
 
 const [allbooks,setallbooks]=useState([]);
 const [activeBook, setActiveBook] = useState(null);
 
 useEffect(()=>{
fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter').then((data)=>{
data.json().then((data)=>{
  let books=data.items
  console.log(books);
  setallbooks(books)
})
})
 },[])
 


  return (
   
    <div >
      <ActiveBook activeBook={activeBook} allBooks={allbooks} />
      <div className="books-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>

      
      {
        allbooks.map((data)=>{
          return <div style={{cursor:"pointer"}} onClick={() => setActiveBook(data)}>
            <img src={data.volumeInfo.imageLinks.thumbnail} alt="" />
          
          </div>
        })
      }
      </div>
     
    
    </div>
  )
    }

export default Booksdisplay;
