import React from 'react'
import {FaPlus} from "react-icons/fa";
const AddItem = ({handleSubmit,newItem,setNewItem}) => {
  return (
    <form className='form-group pt-3 pb-4' onSubmit={handleSubmit}>
        <label htmlFor="addItem" className='text-primary fw-bold'> Add Item</label>
        <input type="text" name="addItem" 
        id="addItem" className='form-control mt-2'
         placeholder='Add Item...' 
         required
         value={newItem}
         onChange={(e)=>setNewItem(e.target.value)}
         
         />
        <button type='submit' className='btn btn-primary mt-2' ><FaPlus/> Add New Item</button>
    </form>
  )
}

export default AddItem