import React,{useState,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes]=useState(JSON.parse(localStorage.getItem("notes"))|| [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));//Adding notes to local storage
  }, [notes]);

  function addNote(newNote){
    setNotes(prev=>{
      return [...prev,newNote]
    })
  }
  function deleteNote(del_id){
    setNotes((prevNotes)=>{      
       return prevNotes.filter((note)=>{
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
