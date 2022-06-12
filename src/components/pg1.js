import { useState, } from 'react';
import {useNavigate} from "react-router-dom"
import '../App.css';
import { FriendlyDetails, TournamentDetails } from '../details.js'

function Pg1(props){
    let navigate = useNavigate();
    const [next,setNext] = useState("");

    const nav = (e) =>{
        if(next=="Friendly"){
            navigate("/pg2");
            let details = new FriendlyDetails();
            props.updateDetails(details);
        }
        else if(next=="Tournament"){
            navigate("/pg3")
            let details = new TournamentDetails();
            props.updateDetails(details);
        }
        e.preventDefault(); 
    }
  return(
    <div className='container'>
    <div className="App">
     <form>
     <select id='option' onChange={(e)=>setNext(e.target.value)}>
     <option value="" disabled selected hidden  >Match Type</option>
      <option value="Friendly">Friendly</option>
      <option value="Tournament" >Tournament</option>
       </select>
        <button id="btn" type="submit" onClick={nav}>Next</button>
     </form>
    </div>
    </div>
    );
}

export default Pg1;
