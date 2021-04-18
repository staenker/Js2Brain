import {useRef, useState} from "react";
import Editor from "@monaco-editor/react";

export default function JsEditor(props) {
    const [jsCode, setJsCode] = useState('console.log("Hello World");');

    // Docs: https://github.com/suren-atoyan/monaco-react
    const editorRef = useRef(null);

    function handleEditorDidMount(editor, monaco) {
        console.log("Mount")
        editorRef.current = editor;
    }

    function showValue() {
        alert(editorRef.current.getValue());
    }

    return (
        <div>
            <label>Enter value : </label>
            <button onClick={showValue}>Show value</button>
            <Editor
                height="90vh"
                defaultLanguage="javascript"
                defaultValue="// some comment"
                onMount={handleEditorDidMount}
            />
        </div>
    );
}
