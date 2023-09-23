const InputText = ({ name, pemegang, className, inputHandler }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={pemegang}
      className={className}
      onInput={inputHandler}
    />
  );
};

const InputTextRequired = ({
  name,
  pemegang,
  className,
  length,
  inputHandler,
  changeHandler,
}) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={pemegang}
      className={className}
      required
      maxLength={length}
      onInput={inputHandler}
      onChange={changeHandler}
    />
  );
};

export { InputText, InputTextRequired };
