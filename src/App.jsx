import React, { useState, useEffect } from 'react'
import NavBar from './components/Navbar/NavBar'
import UserList from './components/UserList/UserList'
import './App.css'
import Pagination from './components/Pagination/Pagination';

function App() {
  let [UserData , setUserData] = useState({});
  let [isLoading , setIsLoading] = useState(false);
  let [pageNumber , setPageNumber] = useState(1);

  useEffect(() => {
    fetchData()
  },[pageNumber])

  function onClickHandler(){
    fetchData()
  }
  
  async function fetchData(){
    setIsLoading(true)
    var response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`);
    var result = await response.json();
    setUserData(result);
    setIsLoading(false)
  }

  return (
    <React.Fragment>
      <NavBar OnClick={onClickHandler} ></NavBar>
      {
        isLoading
        ? <div className='loadingText'>
            <p>Loading Please Wait</p>
          </div>
        : <React.Fragment>
            <UserList Users={UserData.data} ></UserList>
            <Pagination currentPage={UserData.page} totalPage={UserData.total_pages} next={() => setPageNumber(pageNumber+1)} previous={() => setPageNumber(pageNumber-1)}></Pagination>
          </React.Fragment>
      }
      
    </React.Fragment>
  )
}

export default App
