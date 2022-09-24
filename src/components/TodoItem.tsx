import React, { FC } from 'react';
import {
  Checkbox,
  FormHelperText,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useAppDispatch } from '../store/hooks/useAppDispatch';
import { removeTodo, setChecked } from '../store/reducers/TodosSlice';
import moment from 'moment';
import 'moment/locale/ru';

interface ITodoItemProps {
  id: string;
  title: string;
  checked: boolean;
  end?: string;
}

const TodoItem: FC<ITodoItemProps> = ({ id, title, checked, end }) => {
  const dispatch = useAppDispatch();

  const handlerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(removeTodo(id));
  };

  return (
    <ListItem>
      <ListItemButton onClick={() => dispatch(setChecked(id))}>
        <ListItemIcon>
          <Checkbox checked={checked} />
        </ListItemIcon>
        <ListItemText
          sx={{ color: checked ? '#808080' : '' }}
          primary={title}
          className={'break-words'}
        />
        {end && end !== '0' && end.trim() && (
          <FormHelperText>
            {moment(end).locale('ru').format('DD MMM')}
          </FormHelperText>
        )}
        <IconButton onClick={handlerClick} edge='end' aria-label='delete'>
          <Delete sx={{ color: checked ? '#808080' : 'red' }} />
        </IconButton>
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;
