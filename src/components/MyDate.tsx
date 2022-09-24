import React, { FC, useRef } from 'react';
import moment from 'moment';
import { TextField } from '@mui/material';

interface MyDateProps {
  setEnd: (date: string) => void;
}
const MyDate: FC<MyDateProps> = ({ setEnd }) => {
  const date = useRef(new Date());

  return (
    <TextField
      id='datetime-local'
      label='Запланировать'
      type='datetime-local'
      defaultValue={moment(date.current).format('YYYY-MM-DDTHH:mm')}
      sx={{ width: 250 }}
      InputLabelProps={{
        shrink: true
      }}
      onChange={e => {
        if (e.target.value !== moment(date.current).format('YYYY-MM-DDTHH:mm'))
          setEnd(e.target.value);
      }}
      inputProps={{
        min: moment(date.current).format('YYYY-MM-DDThh:mm')
      }}
    />
  );
};

export default MyDate;
