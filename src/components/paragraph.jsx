const Paragraph = ({ className, text, textContent }) => {
  return (
    <p className={className}>
      {textContent}
      {text}
    </p>
  );
};

export { Paragraph };
