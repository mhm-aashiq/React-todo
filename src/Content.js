import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ItemList from './ItemList';


const Content = ({items,handleCheck,handleDelete}) => {

  return (
    <div className='pt-4 pb-4 content'>
      <table className='table-bordered table table-hover'>
      <thead>
        <tr>
          <th>Checked</th>
          <th>Items</th>
          <th>Actions</th>
        </tr>
       
      </thead>
        {(items.length)?(
      
    
        <ItemList
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
     />
     
      
        ): (<h2 className='text-center text-danger'>Please Add Items</h2>) }
        </table>



      </div>
    
  )
}

export default Content