import "./styles.css";
import { useState } from "react";
import styled from "styled-components";
import { List } from "./components/List";
import { Editor } from "./components/Editor";
import { useLocalStorage } from "./hooks/useLocalstorage";
import { nanoid } from "nanoid";
import { Toolbar } from "./components/Toolbar";

// wyswietlic liste notatek

const Div = styled.div`
  flex: 1 100%;
`;

const NewNote = styled.button`
  background-color: inherit;
  border: 0;
  color: white;
`;

const Sidebar = styled.div`
  width: 300px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-around;
  flex-direction: row-reverse;
  background-color: ${(props) => props.color};
  overflow-y: auto;
`;

const newNote = () => ({
  title: "Notatka",
  content: "Twoja notatka",
  id: nanoid(8),
  createdAt: new Date()
});

const initialNote = newNote();

export default function App() {
  const [notes, setNotes] = useLocalStorage("notes", [initialNote]);
  const [selectedId, setSelectedId] = useState(notes[0]?.id);
  const selectedNote = notes.filter((note) => note.id === selectedId)[0];

  const [isListOpen, setIsListOpen] = useState(false);
  const setListOpen = () => {
    setIsListOpen((prevState) => !prevState);
  };

  const createNote = () => {
    const note = { title: "Notatka", content: "Twoja notatka" };
    note.id = nanoid(8);
    note.createdAt = new Date();
    setNotes([note, ...notes]);
  };

  const removeNote = (noteId) => {
    const result = notes.filter((note) => note.id !== noteId);
    if (noteId === selectedId) {
      setSelectedId(result[0]?.id);
    }
  };

  const updateNote = (updatedNote) => {
    const updatedList = notes.map((note) => {
      if (note.id === updatedNote.id) return updatedNote;
      return note;
    });
    setNotes(updatedList);
  };

  return (
    <Wrapper color={selectedNote.color}>
      <Div>
        <Toolbar
          setListOpen={setListOpen}
          selectedNote={selectedNote}
          updateNote={updateNote}
        />
        <Editor updateNote={updateNote} selectedNote={selectedNote} />
      </Div>
      {isListOpen && (
        <Sidebar>
          <div>
            <NewNote onClick={createNote}>
              <h1>+ New Note</h1>
            </NewNote>
            <List
              setSelectedId={setSelectedId}
              notes={notes}
              removeNote={removeNote}
            />
          </div>
        </Sidebar>
      )}
    </Wrapper>
  );
}
