import { useState } from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom'
import DateTimePicker from 'react-datetime-picker';
import { FriendlyDetails, TournamentDetails } from '../details.js'

export default function Pg2(props){
    let  navigate = useNavigate();
    const [next,setNext] = useState("");
    const [value, onChange] = useState(null);
    const [start,setStart] = useState("");
    const [end,setEnd] = useState("");
    const [location,setLocation] = useState("");
    const [comments,setComments] = useState("");

    const back = (e) =>{
        navigate("/");
        e.preventDefault();
    }
    const Next = (e) =>{
        props.details.startDate = start;
        props.details.endDate = end;
        props.details.location = location;
        props.details.comments = comments;
        props.updateDetails(props.details);
        navigate("/pg4");
        e.preventDefault();
    }
  return(
    <form>
    <div className="friendly match">
    <span id='startdate1'><DateTimePicker id='datetime1'  value={start} onChange={setStart} 
        hourPlaceholder={"--"} minutePlaceholder={"--"} dayPlaceholder={`Start date and time:    --`} format={"dd MM y | h mm a"}
         /></span>
       <span id='startdate2'> <DateTimePicker value={end} onChange={setEnd}
        hourPlaceholder={"--"} minutePlaceholder={"--"} dayPlaceholder={`End date and time:    --`} format={"dd MM y | h mm a"}
         /><br></br></span>
    <input type='text' placeholder='match location' id="matchlocation" onChange={(e)=>setLocation(e.target.value)}/>
    <textarea type='text' placeholder='comments' id='comments' onChange={(e)=>setComments(e.target.value)}/>
        <button id="btn1" type="submit" onClick={Next}>Next</button>
        <button id="btn2" type="submit" onClick={back}>Back</button>
   </div></form>
    );
}

