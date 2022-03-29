import React from "react";

import "./InfoTemplate.scss";

interface InfoTemplateProps {
  title: string;
  text: string | string[];
}

function InfoTemplate({ title, text }: InfoTemplateProps) {
  return (
    <div className="InfoTemplateContainer">
      <div className="InfoTemplateContainer__block">
        <div>
          <p className="InfoTemplateContainer__block__title">{title}</p>
        </div>
        <div className="InfoTemplateContainer__block__gap">
          {Array.isArray(text) ? (
            text.map((smallText) => (
              <p className="InfoTemplateContainer__block__text">{smallText}</p>
            ))
          ) : (
            <p className="InfoTemplateContainer__block__text">{text}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoTemplate;
