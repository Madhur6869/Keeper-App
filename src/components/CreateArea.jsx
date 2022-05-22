import React,{useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
    const [isExpanded,setExpanded]=useState(false)

    const [note, setNote]=useState({
        id:"",
        title:"",
        content:""
    })
    function handleChange(event){
        const {name,value}=event.target

        setNote((prevNote)=>{
            return {
                ...prevNote,
                [name]:value,
                id:uuidv4()
            }
        })
    }

    function submitNote(event){
        event.preventDefault()
        props.onAdd(note)
        // Clearing input
        setNote(()=>{
            return {
            title:"",
            content:""}
        })
    }

    function expand(){
        setExpanded(true)
    }
  return (
    <div>
      <form className="create-note">
       {isExpanded ? <input name="title" onChange={handleChange} placeholder="Title" value={note.title}/>: null}
        <textarea name="content" onClick={expand} onChange={handleChange} placeholder="Take a note..." rows={isExpanded?3:1} value={note.content} />
        <Zoom in={isExpanded}>       
        <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
