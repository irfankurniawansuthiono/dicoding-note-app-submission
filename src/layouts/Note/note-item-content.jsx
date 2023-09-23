import { Heading3 } from "../../components/Heading";
import { Paragraph } from "../../components/paragraph";
const NoteItemContent = ({ title, date, content }) => {
  return (
    <div className="note-item__content">
      <Heading3 className="note-item__title" title={title} />
      <Paragraph className="note-item__date" text={date} />
      <Paragraph className="note-item__body" text={content} />
    </div>
  );
};

export { NoteItemContent };
