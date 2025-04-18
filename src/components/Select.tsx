import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  required?: boolean;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  value,
  onChange,
  options,
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
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
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
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
