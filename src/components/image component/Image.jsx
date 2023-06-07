import React, { useRef, useState } from "react";

import "./Image.css";

export default function Image({ source }) {
  return (
    <div className="card__image">
      <img
        src={source}
        alt="chevrolet car picture"
        className="card__image-img"
      />
    </div>
  );
}
