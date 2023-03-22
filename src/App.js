import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import Filter from './Components/Filter'
import { apiUrl, filterData } from './Components/data';

function App() {
  return (
    <div>

      <div>
      <Navbar></Navbar>
      </div>

      <div>
        <Filter filterData = {filterData}></Filter>
      </div>

      <div>
        <Cards></Cards>
      </div>

    </div>
  );
}

export default App;
