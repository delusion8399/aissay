"use client";

import React from 'react';

interface WordCountProps {
  text: string;
}

const WordCount: React.FC<WordCountProps> = ({ text }) => {
  const getWordCount = () => {
    if (!text) return 0;
    return text.split(/\s+/).filter(word => word.length > 0).length;
  };

  return (
    <div className="word-count-chunky">
      {getWordCount()} words
    </div>
  );
};

export default WordCount;
