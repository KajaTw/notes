import styled from "styled-components";
import { TrashIcon } from "./Icons";

const Div = styled.div`
  height: 100%;
  display: flex;
  background-color: PaleVioletRed;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: inherit;
  border: 0;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Content = styled.div``;

const Listitem = styled.li`
  display: flex;
  flex-direction: row-reverse;
  margin: 4px;
  background-color: ${(props) => props.color};
`;

export const List = ({ notes, removeNote, setSelectedId }) => {
  return (
    <Div>
      <Ul>
        {notes.map((note) => (
          <Listitem color={note.color} key={note.id}>
            <Button onClick={() => removeNote(note.id)}>
              <TrashIcon></TrashIcon>
            </Button>
            <Content>
              <h1 onClick={() => setSelectedId(note.id)}>{note.title}</h1>
              <small>{`utworzono: ${note.createdAt}`}</small>
            </Content>
          </Listitem>
        ))}
      </Ul>
    </Div>
  );
};
