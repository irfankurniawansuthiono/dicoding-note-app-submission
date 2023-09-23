import { Heading2 } from "../../components/Heading";
import Form from "../Form/Form";
const NoteInput = ({ data, setData }) => {
  return (
    <div className="note-input">
      <Heading2 title="Buat Catatan" />
      <Form data={data} setData={setData} />
    </div>
  );
};

export { NoteInput };
