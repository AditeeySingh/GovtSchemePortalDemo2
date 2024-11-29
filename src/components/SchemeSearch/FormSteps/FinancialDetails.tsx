import React from 'react';
import { FormField } from '../FormField';
import { occupations } from '@/lib/constants';

interface FinancialDetailsProps {
  formData: any;
  onChange: (field: string, value: string) => void;
}

export function FinancialDetails({ formData, onChange }: FinancialDetailsProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-purple-400 mb-6">Financial & Occupation Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Annual Family Income (₹)"
          type="number"
          value={formData.income}
          onChange={(e) => onChange('income', e.target.value)}
          placeholder="Enter amount in rupees"
          min="0"
          required
        />

        <FormField
          label="Below Poverty Line (BPL)?"
          type="select"
          value={formData.isBPL}
          onChange={(e) => onChange('isBPL', e.target.value)}
          options={[
            { value: '', label: 'Select Option' },
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' }
          ]}
          required
        />

        <FormField
          label="BPL Card Number"
          type="text"
          value={formData.bplCardNo}
          onChange={(e) => onChange('bplCardNo', e.target.value)}
          placeholder="Enter BPL card number if applicable"
          disabled={formData.isBPL !== 'yes'}
        />

        <FormField
          label="Occupation"
          type="select"
          value={formData.occupation}
          onChange={(e) => onChange('occupation', e.target.value)}
          options={[
            { value: '', label: 'Select Occupation' },
            ...occupations.map(occupation => ({
              value: occupation.toLowerCase(),
              label: occupation
            }))
          ]}
          required
        />

        <FormField
          label="Monthly Family Expenditure (₹)"
          type="number"
          value={formData.monthlyExpenditure}
          onChange={(e) => onChange('monthlyExpenditure', e.target.value)}
          placeholder="Enter amount in rupees"
          min="0"
          required
        />

        <FormField
          label="Number of Family Members"
          type="number"
          value={formData.familyMembers}
          onChange={(e) => onChange('familyMembers', e.target.value)}
          min="1"
          required
        />
      </div>
    </div>
  );
}