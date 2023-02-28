import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  padding: 1em;
  width: 100%;
  height: 30px;
`;

const InputContent = styled.textarea`
  border: none;
  background: transparent;
  padding: 1em;
  width: 100%;
  flex: 1 100%;
`;

export const Editor = ({ className, selectedNote, updateNote }) => {
  return (
    <Div className={className}>
      <Input
        onChange={(e) => updateNote({ ...selectedNote, title: e.target.value })}
        type="text"
        name="title"
        value={selectedNote.title}
      />
      <InputContent
        onChange={(e) =>
          updateNote({ ...selectedNote, content: e.target.value })
        }
        type="text"
        name="content"
        value={selectedNote.content}
      />
    </Div>
  );
};
