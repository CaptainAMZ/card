import React, { useState } from "react";
import Image from "./components/image component/Image";
import Text from "./components/text component/Text";

import "./App.css";

function App() {
  const [data, setData] = useState({
    src: "../public/Images/chevy.jpg",
    title : "Lizard",
    text: `Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Dolor magnam, maiores autem 
    ipsum numquam enim expedita quis laborum, 
    ducimus necessitatibus consequatur temporibus 
    inventore libero repudiandae eius iusto sit 
    tempore nemo.`
  });
  return (
    <>
      <div className="card">
        <Image source={data.src} />
        <Text title={data.title} text={data.text}/>
      </div>
    </>
  );
}

export default App;
