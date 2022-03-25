import React from "react";

import "./InfoTemplate.scss";

interface InfoTemplateProps {
  title: string;
  text: string;
}

function InfoTemplate({ title, text }: InfoTemplateProps) {
  return (
    <div className="InfoTemplateContainer">
      <div className="InfoTemplateContainer__block">
        <div>
          <p className="InfoTemplateContainer__block__title">{title}</p>
        </div>
        <div>
          <p className="InfoTemplateContainer__block__text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoTemplate;
