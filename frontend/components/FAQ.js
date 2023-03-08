import React, { useState } from 'react';
import ReactMarkdown from "react-markdown";

export default function FAQ({ question, answer }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="question-answer" >
      <div className="question" onClick={() => setIsActive(!isActive)}>
        <ReactMarkdown children={question} />
        <div className="icon">{isActive ? '–' : '+'}</div>
      </div>
      {isActive && <div className="answer"><ReactMarkdown linkTarget="_blank" children={answer} /></div>}
    </div>
  )
}