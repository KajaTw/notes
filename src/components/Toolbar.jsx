import { DropdownIcon } from "./Icons";
import { TearIcon } from "./Icons";
import { useState } from "react";
import styled from "styled-components";

const colors = [
  "#29E96B",
  "#D2EB1F",
  "#55C36E",
  "#2AE8F9",
  "#E8AA94",
  "#7F195A",
  "#D79113",
  "#D72751",
  "#0B31CD"
];

export const Toolbar = ({ setListOpen, selectedNote, updateNote }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const setSidebarOpen = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };
  const colorChange = (color) => {
    const updatedNote = { ...selectedNote, color };
    updateNote(updatedNote);
  };

  return (
    <div>
      <DropdownButton onClick={() => setListOpen()}>
        <DropdownIcon></DropdownIcon>
      </DropdownButton>
      <TearButton onClick={() => setSidebarOpen()}>
        <TearIcon></TearIcon>
      </TearButton>
      {isSidebarOpen && (
        <Sidebar>
          {colors.map((color) => (
            <button onClick={() => colorChange(color)}>
              {" "}
              <div style={{ backgroundColor: color, width: 20, height: 20 }} />
            </button>
          ))}
        </Sidebar>
      )}
    </div>
  );
};

const DropdownButton = styled.button`
  background: inherit;
  border: none;
`;

const TearButton = styled.button`
  background: inherit;
  border: none;
`;
const Sidebar = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  width: 250px;
`;
