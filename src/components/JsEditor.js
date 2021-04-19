import { useRef, useState } from "react";
import Editor from "@monaco-editor/react";

export default function JsEditor(props) {
  const [jsCode, setJsCode] = useState('console.log("Hello World");');

  // Docs: https://github.com/suren-atoyan/monaco-react
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    console.log("Mount");
    editorRef.current = editor;
  }

  const onEditorChange = (newContent) => {
    setJsCode(newContent);
  };

  return (
    <div>
      <pre>{jsCode}</pre>
      <Editor
        height="50vh"
        defaultLanguage="javascript"
        value={jsCode}
        onMount={handleEditorDidMount}
        onChange={onEditorChange}
        theme="vs-dark"
      />
    </div>
  );
}
