"use client";

import React, { useState, useEffect } from 'react';
import CopyButton from './CopyButton';
import WordCount from './WordCount';

const EssayWriter: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [wordCount, setWordCount] = useState(500);
  const [essayType, setEssayType] = useState('classic');
  const [writingStyle, setWritingStyle] = useState('standard');
  const [customStyle, setCustomStyle] = useState('');
  const [essay, setEssay] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);
  const [sliderValue, setSliderValue] = useState(500);
  const [estimatedPages, setEstimatedPages] = useState('~1.0');

  // Calculate estimated pages based on word count (roughly 500 words per page)
  useEffect(() => {
    const pages = (wordCount / 500).toFixed(1);
    setEstimatedPages(`~${pages}`);
  }, [wordCount]);

  // Handle word count input change
  const handleWordCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    // Limit to between 100 and 2000 words
    const limitedValue = Math.min(Math.max(value, 100), 2000);
    setWordCount(limitedValue);
    setSliderValue(limitedValue);
  };

  // Handle slider change
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setWordCount(value);
    setSliderValue(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setEssay(''); // Clear previous essay
    setError('');

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic,
          wordCount,
          essayType,
          writingStyle: writingStyle === 'custom' ? customStyle : writingStyle,
          isCustomStyle: writingStyle === 'custom',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate essay');
      }

      setEssay(data.essay);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // Render step 1: Topic input
  const renderStep1 = () => (
    <div>
      <label htmlFor="topic" className="chunky-label">Essay Topic or Question</label>
      <input
        type="text"
        id="topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter your essay topic or question"
        className="chunky-input"
        required
      />
      <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={nextStep}
          disabled={!topic}
          className="chunky-button bg-blue-500 text-white px-8 py-3 font-bold"
        >
          Next
        </button>
      </div>
    </div>
  );

  // Render step 2: Word count selection
  const renderStep2 = () => (
    <div>
      <label htmlFor="wordCount" className="chunky-label">Word Count</label>
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <input
            type="number"
            id="wordCount"
            value={wordCount}
            onChange={handleWordCountChange}
            min="100"
            max="2000"
            step="50"
            className="chunky-input w-32"
          />
          <span className="text-lg">words, or {estimatedPages} pages</span>
        </div>
        <input
          type="range"
          min="100"
          max="2000"
          step="50"
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full h-4 bg-gray-200 border-2 border-black rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
        <div className="flex justify-between text-xs mt-1">
          <span>100</span>
          <span>500</span>
          <span>1000</span>
          <span>1500</span>
          <span>2000</span>
        </div>
      </div>

      <label htmlFor="essayType" className="chunky-label mt-6">Essay Type</label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        {['Classic', 'Compare/Contrast', 'Argumentative', 'Persuasive', 'Critique', 'Memoir'].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setEssayType(type.toLowerCase())}
            className={`py-3 px-4 border-3 border-black rounded-md font-bold transition-all ${essayType === type.toLowerCase() ? 'bg-[#FF9F1C] text-white border-4 transform translate-y-[-3px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white hover:bg-gray-100'}`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="chunky-button bg-gray-200 text-black px-8 py-3 font-bold"
        >
          Back
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="chunky-button bg-blue-500 text-white px-8 py-3 font-bold"
        >
          Next
        </button>
      </div>
    </div>
  );

  // Render step 3: Writing style selection
  const renderStep3 = () => (
    <div>
      <label className="chunky-label">Writing Style</label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        {['Standard', 'Academic', 'Creative', 'Conversational', 'Professional', 'Custom'].map((style) => (
          <button
            key={style}
            type="button"
            onClick={() => setWritingStyle(style.toLowerCase())}
            className={`py-3 px-4 border-3 border-black rounded-md font-bold transition-all ${writingStyle === style.toLowerCase() ? 'bg-[#FF9F1C] text-white border-4 transform translate-y-[-3px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-white hover:bg-gray-100'}`}
          >
            {style}
          </button>
        ))}
      </div>

      {writingStyle === 'custom' && (
        <div className="mt-4">
          <label htmlFor="customStyle" className="chunky-label">Custom Writing Style</label>
          <textarea
            id="customStyle"
            value={customStyle}
            onChange={(e) => setCustomStyle(e.target.value)}
            placeholder="Describe your desired writing style in detail..."
            className="chunky-input h-32"
            required={writingStyle === 'custom'}
          />
        </div>
      )}

      <div className="mt-8 flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="chunky-button bg-gray-200 text-black px-8 py-3 font-bold"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isLoading || (writingStyle === 'custom' && !customStyle)}
          className="chunky-button bg-blue-500 text-white px-8 py-3 font-bold"
        >
          {isLoading ? 'Generating Essay...' : 'Generate Essay'}
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6 mb-6">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}

        {error && (
          <div className="p-4 bg-red-100 border-3 border-black text-red-700 rounded-md">
            {error}
          </div>
        )}
      </form>

      {(essay || isLoading) && (
        <div className="relative">
          <div className="essay-display-chunky relative">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-xl font-bold animate-pulse">
                  Generating your essay...
                </div>
              </div>
            ) : (
              <>
                <div className="whitespace-pre-line">{essay}</div>
                <CopyButton text={essay} />
                <WordCount text={essay} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EssayWriter;
