import React from 'react';
import { FormField } from '../FormField';
import { indianStates } from '@/lib/constants';

interface LocationDetailsProps {
  formData: any;
  onChange: (field: string, value: string) => void;
}

export function LocationDetails({ formData, onChange }: LocationDetailsProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-purple-400 mb-6">Location Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="State/UT"
          type="select"
          value={formData.state}
          onChange={(e) => onChange('state', e.target.value)}
          options={[
            { value: '', label: 'Select State/UT' },
            ...indianStates.map(state => ({
              value: state.toLowerCase(),
              label: state
            }))
          ]}
          required
        />

        <FormField
          label="District"
          type="text"
          value={formData.district}
          onChange={(e) => onChange('district', e.target.value)}
          placeholder="Enter your district"
          required
        />

        <FormField
          label="City/Village"
          type="text"
          value={formData.city}
          onChange={(e) => onChange('city', e.target.value)}
          placeholder="Enter your city or village"
          required
        />

        <FormField
          label="PIN Code"
          type="text"
          value={formData.pincode}
          onChange={(e) => onChange('pincode', e.target.value)}
          placeholder="Enter 6-digit PIN code"
          pattern="[0-9]{6}"
          required
        />

        <FormField
          label="Address"
          type="textarea"
          value={formData.address}
          onChange={(e) => onChange('address', e.target.value)}
          placeholder="Enter your complete address"
          className="col-span-2"
          required
        />
      </div>
    </div>
  );
}