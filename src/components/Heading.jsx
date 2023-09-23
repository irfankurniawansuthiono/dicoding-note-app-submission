const Heading1 = ({ title }) => {
  return <h1>{title}</h1>;
};

const Heading2 = ({ title }) => {
  return <h2>{title}</h2>;
};

const Heading3 = ({ className, title }) => {
  return <h3 className={className}>{title}</h3>;
};

export { Heading1, Heading2, Heading3 };
