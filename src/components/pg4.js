import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import '../App.css';
import {Team} from '../details'

export default function Pg4(props){
    let  navigate = useNavigate();
    const [next,setNext] = useState("");
    const [team1,setTeam1] = useState("");
    const [team2,setTeam2] = useState("");
    const [temp1,setTemp1] = useState("");
    const [temp2,setTemp2] = useState("");

   
    const back = (e) =>{
        navigate("/");
        e.preventDefault();
    }
    const Next = (e) =>{
        navigate("");
        let Team1=new Team();
        Team1.name=team1;
        Team1.place=temp1;
        let Team2=new Team();
        Team2.name=team2;
        Team2.place=temp2;
        props.details.teams.push(Team1);
        props.details.teams.push(Team2);
        props.updateDetails(props.details);
        navigate("/pg5");
        e.preventDefault();
    }
  return(
    <form>
    <div className="teams">
    <input type='text' placeholder='team 1 name' id='teamone' onChange={(e)=>setTeam1(e.target.value)}/>
    <select id='optionone' onChange={(e)=>setTemp1(e.target.value)}>
    <option value="" disabled selected hidden  >Home or Away</option>
      <option value="Home" >Home</option>
      <option value="Away">Away</option></select> <br></br>
      <div id='dividor'>
      <div id='lhs'></div><span id='vs'>VS</span><div id='rhs'></div><br></br>
      </div>
      <input type='text' placeholder='team 2 name' id='teamtwo' onChange={(e)=>setTeam2(e.target.value)}/>
      <select id='optiontwo' onChange={(e)=>setTemp2(e.target.value)}>
    <option value="" disabled selected hidden  >Home or Away</option>
      <option value="Home" id='op3'>Home</option>
      <option value="Away" id='op4'>Away</option></select> <br></br>
        <button id="btn3" type="submit" onClick={Next}>Next</button>
        <button id="btn4" type="submit" onClick={back}>Back</button>
   </div></form>
    );
}

