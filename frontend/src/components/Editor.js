import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/xml/xml';  // XML mode for HTML

const Editor = ({ html, setHtml }) => {
    return (
        <CodeMirror
            value={html}
            options={{
                mode: 'xml',  // Use XML mode to support HTML syntax
                theme: 'material',
                lineNumbers: true
            }}
            onBeforeChange={(editor, data, value) => {
                setHtml(value);
            }}
        />
    );
};

export default Editor;
