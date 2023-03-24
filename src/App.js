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
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true)
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();

      setCourses(output.data)
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
    <div className="flex flex-col min-h-screen bg-bgDark2 bg-slate-600">

      <div>
        <Navbar></Navbar>
      </div>

      <div className="bg-slate-600">
      <div>
        <Filter filterData={filterData}  category={category}
            setCategory={setCategory}></Filter>
      </div>

      <div  className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses= {courses} category={category}/>)
        }
      </div>
    </div>
    </div>
  )
}

export default App
