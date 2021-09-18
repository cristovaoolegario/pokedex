import React from "react";
import confusedPikachu from "../../assets/not-found.gif";
import "../GenericCard.css";

const NotFoundCard = ({ error }) => {
  return (
    <div className="GenericCard">
      <p>
        <strong>{error}</strong>
      </p>
      <img src={confusedPikachu} />
    </div>
  );
};

NotFoundCard.propTypes = {};
NotFoundCard.defaultProps = {};

export default NotFoundCard;
