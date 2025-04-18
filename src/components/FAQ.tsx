"use client";

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 bg-white border-3 border-black rounded-md font-bold flex justify-between items-center"
      >
        {question}
        <span className="text-xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 border-3 border-t-0 border-black bg-white rounded-b-md">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

interface FAQProps {
  items: Array<{ question: string; answer: string }>;
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;
