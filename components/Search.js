import React from 'react'

function Search() {
  return (
    <div className='search box'>
        <input className='input' type={"text"} placeholder="🔍 Search.."/>
        <ion-icon name="search-outline"></ion-icon>
    </div>
  )
}

export default Search