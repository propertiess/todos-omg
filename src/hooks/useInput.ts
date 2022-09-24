import React, { useState } from 'react';

export const useInput = (val: string) => {
  const [value, setValue] = useState(val);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clear = () => {
    setValue('');
  };

  return {
    value,
    onChange,
    clear
  };
};
