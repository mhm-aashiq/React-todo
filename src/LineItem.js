import React from 'react'
import { FaTrash } from "react-icons/fa";

const LineItem = ({item,handleCheck,handleDelete}) => {
  return (
    
    <tr className='tr' key={item.id}>

    <td>
       <input type="checkbox" onChange={() => handleCheck(item.id)} defaultChecked = {item.checked} />
    </td>
    <td>
        <label className='form-control' onDoubleClick={() => handleCheck(item.id)} 
        style={(item.checked)? {textDecoration: "line-through"}: null}
        >{item.item}
        </label>
        </td>
    <td>
        <FaTrash 
        role='button' 
        tabIndex="0" 
        aria-label={`delete ${item.item}`}
        onClick={() => handleDelete(item.id)}/>
    </td>

  </tr>

  )
}

export default LineItem