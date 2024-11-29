import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { RefreshCw } from 'lucide-react';
import { BasicInfo } from './FormSteps/BasicInfo';
import { LocationDetails } from './FormSteps/LocationDetails';
import { CategoryDetails } from './FormSteps/CategoryDetails';
import { FinancialDetails } from './FormSteps/FinancialDetails';

interface FormData {
  // Basic Info
  name: string;
  age: string;
  gender: string;
  mobile: string;
  email: string;
  aadhaar: string;

  // Location
  state: string;
  district: string;
  city: string;
  pincode: string;
  address: string;

  // Category & Disability
  category: string;
  religion: string;
  hasDisability: string;
  disabilityType: string;
  disabilityCertificateNo: string;
  disabilityPercentage: string;

  // Financial
  income: string;
  isBPL: string;
  bplCardNo: string;
  occupation: string;
  monthlyExpenditure: string;
  familyMembers: string;
}

const initialFormData: FormData = {
  name: '', age: '', gender: '', mobile: '', email: '', aadhaar: '',
  state: '', district: '', city: '', pincode: '', address: '',
  category: '', religion: '', hasDisability: '', disabilityType: '',
  disabilityCertificateNo: '', disabilityPercentage: '',
  income: '', isBPL: '', bplCardNo: '', occupation: '',
  monthlyExpenditure: '', familyMembers: ''
};

export function SearchForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handlePrev = () => setStep(prev => prev - 1);
  const handleStartOver = () => {
    setStep(1);
    setFormData(initialFormData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-purple-400">Find Your Eligible Schemes</h2>
          <Button type="button" variant="secondary" onClick={handleStartOver}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Start Over
          </Button>
        </div>
        
        <div className="relative">
          <div className="bg-gray-900 h-2 rounded-full">
            <div 
              className="bg-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
          <div className="absolute top-4 left-0 right-0 flex justify-between">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`flex flex-col items-center ${
                  i + 1 <= step ? 'text-purple-400' : 'text-gray-600'
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-2 ${
                  i + 1 <= step ? 'bg-purple-500' : 'bg-gray-700'
                }`}>
                  {i + 1}
                </div>
                <span className="text-xs">
                  {i === 0 ? 'Basic Info' :
                   i === 1 ? 'Location' :
                   i === 2 ? 'Category' :
                   'Financial'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg border border-gray-800 mt-16">
        {step === 1 && <BasicInfo formData={formData} onChange={handleChange} />}
        {step === 2 && <LocationDetails formData={formData} onChange={handleChange} />}
        {step === 3 && <CategoryDetails formData={formData} onChange={handleChange} />}
        {step === 4 && <FinancialDetails formData={formData} onChange={handleChange} />}

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <Button type="button" variant="secondary" onClick={handlePrev}>
              Previous
            </Button>
          )}
          {step < totalSteps ? (
            <Button type="button" onClick={handleNext} className="ml-auto">
              Next
            </Button>
          ) : (
            <Button type="submit" className="ml-auto">
              Find Schemes
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}