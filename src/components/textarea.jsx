const TextAreaRequired = ({ className, pemegang, changeHandler }) => {
  return (
    <textarea
      className={className}
      type="text"
      placeholder={pemegang}
      required
      onChange={changeHandler}
    ></textarea>
  );
};

export { TextAreaRequired };
