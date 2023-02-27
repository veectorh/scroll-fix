import React, { useState } from 'react';

export default function FAQ({ question, answer }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="question-answer" >
      <div className="question" onClick={() => setIsActive(!isActive)}>
        <p>{question}</p>
        <div className="icon">{isActive ? '–' : '+'}</div>
      </div>
      {isActive && <div className="answer"><p>{answer}</p></div>}
    </div>
  )
}