import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import '../App.css';
import DateTimePicker from 'react-datetime-picker';

export default function Pg3(props){
    let  navigate = useNavigate();
    const [next,setNext] = useState();

    const [value, onChange] = useState(null);
    const [start,setStart] = useState("");
    const [end,setEnd] = useState("");
    const [location,setLocation] = useState("");
    const [comments,setComments] = useState("");
    const [name,setName] = useState("");

   
    const back = (e) =>{
        navigate("/");
        e.preventDefault();
    }
    const Next = (e) =>{
        props.details.startDate = start;
        props.details.endDate = end;
        props.details.location = location;
        props.details.comments = comments;
        props.details.tournamentName = name;
        props.updateDetails(props.details);
        navigate("/pg4");
        e.preventDefault();
    }
  return(
    <form>
    <div className="friendly match"> 
     <span id='startdate1'> <DateTimePicker onChange={setStart} value={start} 
        hourPlaceholder={"--"} minutePlaceholder={"--"} dayPlaceholder={`Start date and time:    --`} format={"dd MM y | h mm a"}
         /></span> 
      <span id='startdate2'><DateTimePicker onChange={setEnd} value={end} 
        hourPlaceholder={"--"} minutePlaceholder={"--"} dayPlaceholder={`End date and time:    --`} format={"dd MM y | h mm a"}
         /><br></br></span> 

    <input type='text' placeholder='Match Location' id='matchlocation' onChange={(e)=>setLocation(e.target.value)}/>
    <textarea type='text' placeholder='Comments' id='comments' onChange={(e)=>setComments(e.target.value)}/><br></br>
    <input type='text' placeholder='Tournament Name' id='tournamentname' onChange={(e)=>setName(e.target.value)}/>
        <button id="btn3" type="submit" onClick={Next}>Next</button>
        <button id="btn4" type="submit" onClick={back}>Back</button>
   </div></form>
    );
}

