import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import { v4 as uuidv4 } from 'uuid';

function App() {

  const [notes, setNotes]=useState([])

  function addNote(newNote){
    setNotes(prev=>{
      return [...prev,newNote]
    })
  }
  function deleteNote(del_id){
    setNotes((prevNotes)=>{      
       return prevNotes.filter((note)=>{
         console.log(note);
          return note.id!==del_id
        })      
    })
  }
  return (
    <div>
      <Header />
      <CreateArea
      onAdd={addNote} />
    {notes.map((noteItem,index)=>{
      return <Note 
      key={index}
      id={noteItem.id}
      title={noteItem.title}
      content={noteItem.content}
      onDelete={deleteNote}
      />
    })}
           
      <Footer />
    </div>
  );
}

export default App;
