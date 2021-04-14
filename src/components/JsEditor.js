import { useState } from "react";

export default function JsEditor(props) {
  const [jsCode, setJsCode] = useState('console.log("Hello World");');

  const handleJsCodeChange = (e) => {
    setJsCode(e.target.value);
  };

  return (
    <div>
      <label>Enter value : </label>
      <textarea
        rows="5"
        cols="100"
        value={jsCode}
        onChange={handleJsCodeChange}
      />
    </div>
  );
}
