import React, { FC } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';

export interface Item {
  value: string;
  name: string;
}

interface SortSelectProps {
  label: string;
  defaultValue: string;
  items: Item[];
  autoFocus?: boolean;
  onChange: (e: SelectChangeEvent) => void;
}

const SortSelect: FC<SortSelectProps> = ({
  label,
  defaultValue,
  items,
  onChange,
  autoFocus
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        autoFocus={autoFocus}
        value={defaultValue}
        label={label}
        onChange={onChange}
      >
        {items.map(item => (
          <MenuItem key={item.value} autoFocus={autoFocus} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortSelect;
