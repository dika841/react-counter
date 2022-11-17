const Button = ({ teks, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {teks}
    </button>
  );
};

export default Button;
