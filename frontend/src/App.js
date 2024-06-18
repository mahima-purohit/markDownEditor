import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';

const App = () => {
  const [html, setHtml] = useState('');

  return (
    <div className="app">
      <div className="editor-pane">
        <Editor html={html} setHtml={setHtml} />
      </div>
      <div className="preview-pane">
        <Preview html={html} />
      </div>
    </div>
  );
};

export default App;
