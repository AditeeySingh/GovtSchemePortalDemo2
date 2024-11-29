import React from 'react';
import { FormField } from '../FormField';
import { maritalStatus, educationLevels } from '@/lib/constants';

interface BasicInfoProps {
  formData: any;
  onChange: (field: string, value: string) => void;
}

export function BasicInfo({ formData, onChange }: BasicInfoProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-purple-400 mb-6">Basic Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Age"
          type="number"
          value={formData.age}
          onChange={(e) => onChange('age', e.target.value)}
          min="0"
          max="120"
          required
        />

        <FormField
          label="Gender"
          type="select"
          value={formData.gender}
          onChange={(e) => onChange('gender', e.target.value)}
          options={[
            { value: '', label: 'Select Gender' },
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' }
          ]}
          required
        />

        <FormField
          label="Marital Status"
          type="select"
          value={formData.maritalStatus}
          onChange={(e) => onChange('maritalStatus', e.target.value)}
          options={[
            { value: '', label: 'Select Marital Status' },
            ...maritalStatus.map(status => ({
              value: status.toLowerCase(),
              label: status
            }))
          ]}
          required
        />

        <FormField
          label="Education Level"
          type="select"
          value={formData.educationLevel}
          onChange={(e) => onChange('educationLevel', e.target.value)}
          options={[
            { value: '', label: 'Select Education Level' },
            ...educationLevels.map(level => ({
              value: level.toLowerCase(),
              label: level
            }))
          ]}
          required
        />
      </div>
    </div>
  );
}