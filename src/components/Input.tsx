import React from 'react';

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder = '',
  required = false,
  className = '',
}) => {
  return (
    <div className="mb-6">
      <label 
        htmlFor={name} 
        className="block text-lg font-bold mb-2"
      >
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`
          w-full 
          p-4 
          bg-white 
          border-4 
          border-black 
          rounded-md 
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
          focus:outline-none 
          focus:ring-0 
          focus:border-black 
          ${className}
        `}
      />
    </div>
  );
};

export default Input;
