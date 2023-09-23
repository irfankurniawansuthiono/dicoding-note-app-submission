const Button = ({ className, type, text, id, clickHandler }) => {
  return (
    <button className={className} type={type} id={id} onClick={clickHandler}>
      {text}
    </button>
  );
};

export default Button;
