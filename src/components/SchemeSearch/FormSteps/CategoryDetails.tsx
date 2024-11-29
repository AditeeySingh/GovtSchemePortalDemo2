import React, { useState } from 'react';
import { FormField } from '../FormField';
import { disabilityCategories, religionCategories } from '@/lib/constants';

interface CategoryDetailsProps {
  formData: any;
  onChange: (field: string, value: string) => void;
}

export function CategoryDetails({ formData, onChange }: CategoryDetailsProps) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    onChange('disabilityCategory', e.target.value);
  };

  const getDisabilityTypeOptions = () => {
    const category = disabilityCategories.find(c => c.category === selectedCategory);
    return category ? category.types : [];
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-purple-400 mb-6">Category & Disability Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Category"
          type="select"
          value={formData.category}
          onChange={(e) => onChange('category', e.target.value)}
          options={[
            { value: '', label: 'Select Category' },
            { value: 'general', label: 'General' },
            { value: 'sc', label: 'Scheduled Caste (SC)' },
            { value: 'st', label: 'Scheduled Tribe (ST)' },
            { value: 'obc', label: 'Other Backward Class (OBC)' },
            { value: 'minority', label: 'Minority' }
          ]}
          required
        />

        <FormField
          label="Religion"
          type="select"
          value={formData.religion}
          onChange={(e) => onChange('religion', e.target.value)}
          options={[
            { value: '', label: 'Select Religion' },
            ...religionCategories.map(religion => ({
              value: religion.toLowerCase(),
              label: religion
            }))
          ]}
          required
        />

        <FormField
          label="Do you have any disability?"
          type="select"
          value={formData.hasDisability}
          onChange={(e) => onChange('hasDisability', e.target.value)}
          options={[
            { value: '', label: 'Select Option' },
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' }
          ]}
          required
        />

        {formData.hasDisability === 'yes' && (
          <>
            <FormField
              label="Disability Category"
              type="select"
              value={selectedCategory}
              onChange={handleCategoryChange}
              options={[
                { value: '', label: 'Select Disability Category' },
                ...disabilityCategories.map(category => ({
                  value: category.category,
                  label: category.category
                }))
              ]}
              required
            />

            <FormField
              label="Type of Disability"
              type="select"
              value={formData.disabilityType}
              onChange={(e) => onChange('disabilityType', e.target.value)}
              options={[
                { value: '', label: 'Select Disability Type' },
                ...getDisabilityTypeOptions().map(type => ({
                  value: type.toLowerCase(),
                  label: type
                }))
              ]}
              required
              className="col-span-2"
            />

            <FormField
              label="Disability Percentage"
              type="number"
              value={formData.disabilityPercentage}
              onChange={(e) => onChange('disabilityPercentage', e.target.value)}
              placeholder="Enter percentage"
              min="0"
              max="100"
              required
            />

            <FormField
              label="UDID Number"
              type="text"
              value={formData.udidNumber}
              onChange={(e) => onChange('udidNumber', e.target.value)}
              placeholder="Enter UDID number if available"
            />
          </>
        )}
      </div>
    </div>
  );
}