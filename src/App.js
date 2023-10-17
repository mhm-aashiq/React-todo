import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState,useEffect } from 'react';
import AddItem from "./AddItem";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";

function App() {
    const API_URL = "http://localhost:3500/items" //for API Path
    const [items, setItems] = useState([] )       //for items and set
    const [newItem,setNewItem] = useState('');    //for add an item
    const [search,setSearch] = useState('')       // for search item
    const [fetchError,setFetchError] = useState(null) // to get the error on screen
    const [isLoading,setIsLoading] = useState(true)   // get loading message on screen
    
    
// recomanded to do in try catch block
    useEffect(() => {
      const fetchItems = async () =>{              // get like async bcz of link
        try {
          const response = await fetch(API_URL);  // get api url data into varible response
          if(!response.ok) throw Error("Data not Received");
          const listItems = await response.json();      // after getting, then change those into json fomrat
          setItems(listItems);  
          setFetchError(null)                  // setting items into setItems (useState)
        } catch (err) {           
          setFetchError(err.message)                   // catch the error.
        }
        finally{
          setIsLoading(false)           //set load function to false
        }
      }
      setTimeout(() => {
        (async () =>await fetchItems())()
      }, 2000);


    }, [])


    const addItem = async(item) => {                    
    const id = items.length ? items[items.length -1].id + 1:1;

    const addNewItem = {id,checked:false,item}
    const listItems = [...items,addNewItem]
    setItems(listItems)
    
      //create an object
    const postOptions = {
      method: 'POST',                               // method should be post bcz add
      headers: {'Content-Type':'application/json'}, // this shouldnt change
      body: JSON.stringify(addNewItem)              // the db is already in json format so it should be json and addnewitem
    }

    const result = await apiRequest(API_URL,postOptions) // result with path and options
    if(result) setFetchError(result)                     // get error

   
  }

  const handleCheck = async (id) => {
    
    const listItems = items.map((item) => item.id === 
    id ? {...item,checked:!item.checked} : item)
    setItems(listItems)


    const myItem = listItems.filter(item => item.id === id)  // get that particular item id from list items by filtering

    const updateOptions = {                                 //create object
      method: 'PATCH',                                      //updating the checkbox, so patch method
      headers: {'Content-Type':'application/json'},         // this shouldn't change
      body: JSON.stringify({checked:myItem[0].checked})     // json format, should get the first value so 0 and checked
    }
    const reqUrl = `${API_URL}/${id}`                       // get the api url with the particular id changed
    const result = await apiRequest(reqUrl,updateOptions)   // waiting and update with apiRequest function 
    if(result) setFetchError(result)                        // get the rror through the error useState

   
  }

  const handleDelete = async(id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)


    const deleteOptions = {                                 //create object
      method: 'DELETE',                                      //delte the id, so DELETE method only enough
    
    }

    const reqUrl = `${API_URL}/${id}`                       // get the api url with the particular id changed
    const result = await apiRequest(reqUrl,deleteOptions)   // waiting and delete with apiRequest function 
    if(result) setFetchError(result)                        // get the error through the error useState
    
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
  <main>
    {isLoading &&  <p className="text-success fw-bold text-center"> Items Loading... </p>}
    {fetchError && <p className="text-danger fw-bold text-center"> {`Error: ${fetchError}`} </p>}

     {!isLoading && !fetchError &&
     <Content 
      items ={items.filter
        (item => ((item.item).toLowerCase())
        .includes(search.toLowerCase()))}
      
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
     />}
</main>

     <Footer 
      length = {items.length}
     />

    </div>
  );
}

export default App;
