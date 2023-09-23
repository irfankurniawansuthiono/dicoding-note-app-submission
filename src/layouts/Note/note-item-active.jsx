import { NoteItemContent } from "./note-item-content";
import { showFormattedDate } from "../../utils";
import { Paragraph } from "../../components/paragraph";
import { NoteItemAction } from "./note-item-action";

const NoteItemActive = ({
  textArchive,
  textDelete,
  dataActive,
  setDataActive,
  data,
  setData,
}) => {
  return dataActive.length === 0 ? (
    <Paragraph text="Tidak ada catatan" className="notes-list__empty-message" />
  ) : (
    <div className="notes-list">
      {dataActive.map((item) => (
        <div className="note-item" key={item.id}>
          <NoteItemContent
            content={item.body}
            title={item.title}
            date={showFormattedDate(item.createdAt)}
          />
          <NoteItemAction
            textDelete={textDelete}
            textArchive={textArchive}
            id={item.id}
            datanya={data}
            setData={setData}
          />
        </div>
      ))}
    </div>
  );
};

export default NoteItemActive;
