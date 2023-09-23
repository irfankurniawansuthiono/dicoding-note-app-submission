import NoteItemActive from "./Note/note-item-active";
import NoteItemArchive from "./Note/note-item-archive";
import { Heading2 } from "../components/Heading";
import { NoteInput } from "./Note/note-input";
import { useEffect, useState } from "react";
const Main = ({ data, setData }) => {
  useEffect(() => {
    const active = data.filter((item) => item.archived === false);
    const archive = data.filter((item) => item.archived === true);

    setActiveNote(active);
    setArchiveNote(archive);
  }, [data]);

  const [activeNote, setActiveNote] = useState(
    data.filter((item) => item.archived === false)
  );
  const [archiveNote, setArchiveNote] = useState(
    data.filter((item) => item.archived === true)
  );

  return (
    <main className="note-app__body">
      <NoteInput data={data} setData={setData} />
      <Heading2 title="Catatan Aktif" />
      <NoteItemActive
        textArchive="Arsipkan"
        textDelete="Hapus"
        dataActive={activeNote}
        setDataActive={setActiveNote}
        data={data}
        setData={setData}
      />
      <Heading2 title="Arsip" />
      <NoteItemArchive
        textArchive="Pindahkan"
        textDelete="Hapus"
        dataArchive={archiveNote}
        setDataArchive={setArchiveNote}
        data={data}
        setData={setData}
      />
    </main>
  );
};

export default Main;
