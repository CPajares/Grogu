import "./Button.css";

const Button = ({ text, funct, setDiceState }) => {
  return (
    <div className="button_container">
      <button onClick={funct} className="start">
        {text}
      </button>
    </div>
  );
};

export default Button;
