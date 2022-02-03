import { useContext } from "react";
import GroguContext from "../../store/contexts/GroguContext";
import "./GroguContainer.css";

const GroguContainer = ({ containerNumber }) => {
  const { groguState } = useContext(GroguContext);

  return (
    <div
      className={`grogu_board ${
        groguState === containerNumber ? "class1" : ""
      }`}
    >
      {groguState === containerNumber && (
        <img
          width={50}
          className="img_grogu"
          src="../../grogu.png"
          alt={"grogu"}
        ></img>
      )}
    </div>
  );
};

export default GroguContainer;
