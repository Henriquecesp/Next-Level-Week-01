import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import "./styles.css";

const Completed = () => {
  return (
    <div className="complete-div">
      <div className="complete-text">
        <FiCheckCircle className="complete-icon" />
        <h1 className="complete-title">Cadastro concluído!</h1>
      </div>
    </div>
  );
};

export default Completed;
