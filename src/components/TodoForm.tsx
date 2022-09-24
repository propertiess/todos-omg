import React, { FC, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  SelectChangeEvent
} from '@mui/material';
import { useAppDispatch } from '../store/hooks/useAppDispatch';
import { createTodo } from '../store/reducers/TodosSlice';
import { useInput } from '../hooks/useInput';
import MyDate from './MyDate';
import SortSelect from './SortSelect';
import { PRIORITY } from '../utils/constants/Priority';

const TodoForm: FC = () => {
  const dispatch = useAppDispatch();
  const todo = useInput('');
  const [priority, setPriority] = useState('');

  const [isShowDate, setIsShowDate] = useState(false);
  const [isShowPriority, setIsShowPriority] = useState(false);
  const [endOfTodo, setEndOfTodo] = useState('');

  const setEnd = (date: string) => {
    setEndOfTodo(date);
  };

  const createNewTodo = () => {
    if (!todo.value.trim()) return;
    const t = {
      id: Date.now().toString(),
      checked: false,
      title: todo.value.trim(),
      end: endOfTodo.trim() ? endOfTodo : '0',
      priority: priority.trim() ? Number(priority) : 0
    };

    dispatch(createTodo(t));
    todo.clear();

    setPriority('');
    setEndOfTodo('');
    setIsShowDate(false);
    setIsShowPriority(false);
  };

  const handlerKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      createNewTodo();
    }
  };

  const setPrior = (e: SelectChangeEvent) => {
    setPriority(e.target.value);
  };

  return (
    <>
      <FormControl
        sx={{ width: '100%', padding: '0 15px' }}
        onKeyPress={handlerKey}
      >
        <InputLabel htmlFor='my-input'>Что хотите выполнить?</InputLabel>
        <Input
          value={todo.value}
          onChange={todo.onChange}
          id='my-input'
          aria-describedby='my-helper-text'
        />
        <Box className={'my-3'}>
          <Button onClick={createNewTodo}>Добавить</Button>
        </Box>
        {isShowPriority ? (
          <Grid
            container
            className={'ml-auto my-5 flex justify-end'}
            columns={{ xs: 4, sm: 12, lg: 12 }}
          >
            <Grid item xs={12} sm={4}>
              <SortSelect
                label={'Приоритет'}
                defaultValue={priority}
                items={PRIORITY}
                onChange={setPrior}
              />
            </Grid>
          </Grid>
        ) : (
          <Box className={'mt-5 text-end'}>
            <Button onClick={() => setIsShowPriority(true)}>Приоритет</Button>
          </Box>
        )}
        {isShowDate ? (
          <Box className={'mt-5 text-end'}>
            <MyDate setEnd={setEnd} />
          </Box>
        ) : (
          <Box className={'mt-5 text-end'}>
            <Button onClick={() => setIsShowDate(true)}>Запланировать</Button>
          </Box>
        )}
      </FormControl>
    </>
  );
};

export default TodoForm;
