// src/components/common/Accordion.js
import React, { useState } from 'react';
import './Accordion.css';

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
      </div>
      {isOpen && <div className="accordion-answer">{answer}</div>}
    </div>
  );
}

export default Accordion;
