import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from 'react';
import AddItem from "./AddItem";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import SearchItem from "./SearchItem";

function App() {

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("Todo_list"))
    
  )

    const [newItem,setNewItem] = useState('');
    const [search,setSearch] = useState('')
    

    const addItem = (item) => {
    const id = items.length ? items[items.length -1].id + 1:1;

    const addNewItem = {id,checked:false,item}
    const listItems = [...items,addNewItem]
    setItems(listItems)
    if (listItems && listItems !== 'undefined') {
      window.localStorage.setItem("Todo_list",JSON.stringify(listItems),true)}
   
  }

  const handleCheck = (id) => {
    
    const listItems = items.map((item) => item.id === 
    id ? {...item,checked:!item.checked} : item)
    setItems(listItems)
    window.localStorage.setItem("Todo_list",JSON.stringify(listItems),true)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    window.localStorage.setItem("Todo_list",JSON.stringify(listItems),true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newItem) return

    console.log(newItem)
    addItem(newItem)

    setNewItem('')
  }


  return (
    <div className="container">

     <Header title = "Welcome"/>

     <AddItem 
      handleSubmit = {handleSubmit}
      newItem={newItem}
      setNewItem={setNewItem}
     />

    <SearchItem 
    search = {search}
    setSearch = {setSearch}
    />  

     <Content 
    
      items ={items.filter
        (item => ((item.item).toLowerCase())
        .includes(search.toLowerCase()))}
      
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
     />

     <Footer 
      length = {items.length}
     />

    </div>
  );
}

export default App;
