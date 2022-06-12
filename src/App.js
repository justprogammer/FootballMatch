import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Pg1 from './components/pg1';
import {BrowserRouter,Routes,Route,Switch} from 'react-router-dom';
import Pg2 from './components/pg2';
import Pg3 from './components/pg3';
import Pg4 from './components/pg4';
import Pg5 from './components/pg5';



function App(){
  const [matchDetails,updateMatchDetails] = useState();
  
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <Routes>
        <Route exact path="/" element={<Pg1 details={matchDetails} updateDetails={updateMatchDetails}/>} ></Route>
        <Route exact path="/pg2" element={<Pg2 details={matchDetails} updateDetails={updateMatchDetails}/>} ></Route>
        <Route exact path="/pg3" element={<Pg3 details={matchDetails} updateDetails={updateMatchDetails}/>} ></Route>
        <Route exact path="/pg4" element={<Pg4 details={matchDetails} updateDetails={updateMatchDetails} />}></Route>
        <Route exact path="/pg5" element={<Pg5 details={matchDetails} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
