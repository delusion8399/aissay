"use client";

import React, { useState } from 'react';
import CopyButton from './CopyButton';
import WordCount from './WordCount';

const EssayOutliner: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [essayType, setEssayType] = useState('classic');
  const [outline, setOutline] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic) return;

    setIsLoading(true);
    setOutline(''); // Clear previous outline
    setError('');

    try {
      const response = await fetch('/api/outline', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic, essayType }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate outline');
      }

      setOutline(data.outline);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // Render step 1: Topic input
  const renderStep1 = () => (
    <div>
      <label htmlFor="outline-topic" className="chunky-label">Essay Topic or Question</label>
      <input
        type="text"
        id="outline-topic"
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
          className="chunky-button bg-[#FF9F1C] text-white px-8 py-3 font-bold"
        >
          Next
        </button>
      </div>
    </div>
  );

  // Render step 2: Essay type selection
  const renderStep2 = () => (
    <div>
      <label className="chunky-label">Essay Type</label>
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
          type="submit"
          disabled={isLoading}
          className="chunky-button bg-[#FF9F1C] text-white px-8 py-3 font-bold"
        >
          {isLoading ? "Generating Outline..." : "Generate Outline"}
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6 mb-6">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}

        {error && (
          <div className="p-4 bg-red-100 border-3 border-black text-red-700 rounded-md">
            {error}
          </div>
        )}
      </form>

      {(outline || isLoading) && (
        <div className="mt-12 pt-12 border-t-4 border-black">
          <h2 className="text-2xl font-bold mb-6">Your Essay Outline</h2>
          <div className="chunky-container p-6">
            <div className="essay-display-chunky relative min-h-[500px]">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-xl font-bold animate-pulse">
                    Generating your outline...
                  </div>
                </div>
              ) : (
                <>
                  <div className="whitespace-pre-line font-mono">{outline}</div>
                  <CopyButton text={outline} />
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EssayOutliner;
