import "./StuffContainer.css";

const StuffContainer = ({ item, name }) => {
  return (
    <div className="container_stuff">
      <h2>{name}</h2>
      {item[name].map((item, index) => (
        <div key={index}>X</div>
      ))}
    </div>
  );
};

export default StuffContainer;
