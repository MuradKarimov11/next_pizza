'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="699f8fb10b6a9c9bc340c9206f2a44db95978433"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};