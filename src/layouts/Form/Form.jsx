import { InputTextRequired } from "../../components/input";
import { TextAreaRequired } from "../../components/textarea";
import Button from "../../components/Button";
import { useState } from "react";
import { Paragraph } from "../../components/paragraph";
const Form = ({ data, setData }) => {
  const [maxChar, setMaxChar] = useState(50);
  const maxCharText = (e) => {
    const inputText = e.target.value;
    const remainingChars = 50 - inputText.length;
    setMaxChar(remainingChars >= 0 ? remainingChars : 0);
  };

  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  const NoteTitle = (e) => {
    setNoteTitle(e.target.value);
  };
  const NoteBody = (e) => {
    setNoteBody(e.target.value);
  };

  const addNotes = (e) => {
    e.preventDefault();
    setData([
      ...data,
      {
        id: data.length + 1,
        title: noteTitle,
        body: noteBody,
        createdAt: new Date().toISOString(),
        archived: false,
      },
    ]);
  };

  return (
    <form>
      <Paragraph
        className="note-input__title__char-limit"
        textContent="Sisa Karakter : "
        text={maxChar}
      />
      <InputTextRequired
        name="Judul"
        pemegang="Ini adalah judul..."
        className="note_input__title"
        length="50"
        inputHandler={maxCharText}
        changeHandler={NoteTitle}
      />
      <TextAreaRequired
        className="note-input__body"
        pemegang="Tuliskan catatanmu di sini ..."
        changeHandler={NoteBody}
      />
      <Button text="Tambahkan" clickHandler={addNotes} />
    </form>
  );
};

export default Form;
