import React from 'react';
import { cn } from '@/lib/utils';

interface Option {
  value: string;
  label: string;
}

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> {
  label: string;
  type: string;
  options?: Option[];
}

export function FormField({ label, type, options, className, ...props }: FormFieldProps) {
  const baseInputClasses = "w-full rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent";
  
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300">
        {label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {type === 'select' ? (
        <select
          className={cn(baseInputClasses, className)}
          {...props}
        >
          {options?.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          className={cn(baseInputClasses, "min-h-[100px]", className)}
          {...props}
        />
      ) : (
        <input
          type={type}
          className={cn(baseInputClasses, className)}
          {...props}
        />
      )}
    </div>
  );
}