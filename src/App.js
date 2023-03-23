import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import Filter from './Components/Filter'
import { apiUrl, filterData } from './Components/data';
import Spinner from './Components/Spinner'
import {toast} from "react-toastify";

const App = () => {

  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    setLoading(true)
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();

      setCourses(output)
    }
    catch (error) {
      console.log("Network problem")
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>

      <div>
        <Navbar></Navbar>
      </div>

      <div>
        <Filter filterData={filterData}></Filter>
      </div>

      <div>
        {
          loading ? (<Spinner/>) : (<Cards courses= {courses}/>)
        }
      </div>

    </div>
  )
}

export default App
