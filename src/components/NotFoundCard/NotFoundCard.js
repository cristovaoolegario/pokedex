import React from "react";
import confusedPikachu from "../../assets/not-found.gif";
import "../GenericCard.css";
import { useTranslation } from "react-i18next";

const NotFoundCard = ({ error }) => {
  const { t } = useTranslation();
  return (
    <div className="GenericCard">
      <p>
        <strong>{t(error)}</strong>
      </p>
      <img src={confusedPikachu} alt="notFoundImg" />
    </div>
  );
};

NotFoundCard.propTypes = {};
NotFoundCard.defaultProps = {};

export default NotFoundCard;
