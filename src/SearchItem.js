import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (

    <form className='form-group border border-danger rounded p-4' onSubmit={(e) => e.preventDefault()}>
     
        <label className='text-primary fw-bold' htmlFor="search">Search</label>
        <input className='form-control mt-2' type="text"
        id='search' 
        role='searchbox'
        placeholder='Search Items'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />

    </form>
    
    )
}

export default SearchItem