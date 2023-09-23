import Button from "../../components/Button";

function NoteItemAction({ id, textArchive, textDelete, setData, datanya }) {
  const deleteHandler = (id) => {
    const newData = datanya.filter((data) => {
      return data.id !== id;
    });
    setData(newData);
  };

  const archiveHandler = (id) => {
    let newData = datanya.map((item) => {
      if (item.id == id) {
        if (item.archived === true) {
          item.archived = false;
        } else if (item.archived === false) {
          item.archived = true;
        }
      }
      return item;
    });
    setData(newData);
  };

  return (
    <div className="note-item__action">
      <Button
        className="note-item__delete-button"
        text={textDelete}
        id={id}
        clickHandler={() => deleteHandler(id)}
      />
      <Button
        className="note-item__archive-button"
        text={textArchive}
        id={id}
        clickHandler={() => archiveHandler(id)}
      />
    </div>
  );
}

export { NoteItemAction };
