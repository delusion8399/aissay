import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  accentColor: 1 | 2 | 3 | 4;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, accentColor }) => {
  return (
    <div className={`ninja-card ninja-card-accent-${accentColor}`}>
      <div className="mb-4 text-2xl font-bold">"</div>
      <p className="mb-4 italic">{quote}</p>
      <div className="mt-auto">
        <p className="font-bold">{author}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
};

export default Testimonial;
