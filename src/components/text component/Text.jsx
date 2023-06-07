import React, { useState } from "react";
import Btn from "../button component/Btn";

import "./Text.css";

export default function Text({ text, title }) {
  const [data, setData] = useState([
    { id: 1, title: "SHARE" },
    { id: 2, title: "LEARN MORE" },
  ]);

  return (
    <div className="card__details">
      <div className="details__desc">
        <h2 className="desc__title">{title}</h2>
        <p className="desc__text">{text}</p>
      </div>
      <div className="details__buttons">
        {data.map((button) => (
          <Btn key={button.id} {...button}/>
        ))}
      </div>
    </div>
  );
}
