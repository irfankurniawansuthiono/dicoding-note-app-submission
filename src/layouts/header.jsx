import React, { useState } from "react";
import { Heading1 } from "../components/Heading";
import { InputText } from "../components/input";
import { getInitialData } from "../utils";

const originalData = getInitialData();
const Header = ({ data, setData }) => {
  const inputHandler = (e) => {
    const inputText = e.target.value;
    if (inputText.length === 0) {
      setData(originalData);
    } else if (inputText.length > 0) {
      const filteredData = data.filter((item) => {
        return item.title.includes(inputText);
      });
      setData(filteredData);
    }
  };

  return (
    <header className="note-app__header">
      <Heading1 title="Notes" />
      <div className="note-search">
        <InputText
          name="search"
          pemegang="Cari catatan..."
          inputHandler={inputHandler}
        />
      </div>
    </header>
  );
};

export default Header;
