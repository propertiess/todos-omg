import React, { useContext } from 'react';
import {
  Box,
  Container,
  Grid,
  SelectChangeEvent,
  Switch,
  Typography
} from '@mui/material';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { ThemeContext } from '../context/ThemeContext';
import SortSelect from '../components/SortSelect';
import { useAppSelector } from '../store/hooks/useAppSelector';
import { SORTITEMS } from '../utils/constants/SortItems';
import { useAppDispatch } from '../store/hooks/useAppDispatch';
import { setActiveSort } from '../store/reducers/SortedSlice';

const Home = () => {
  const { switchMode, theme } = useContext(ThemeContext);
  const [activeSort] = useAppSelector(state =>
    state.sort.filter(el => el.active)
  );
  const dispatch = useAppDispatch();

  const setSelect = (e: SelectChangeEvent) => {
    dispatch(setActiveSort({ name: e.target.value }));
  };

  return (
    <>
      <Container>
        <Box>
          <Switch
            checked={theme.palette.mode !== 'light'}
            color={'error'}
            onChange={() => {
              switchMode();
            }}
          ></Switch>
          <Typography variant={'h2'}>Входящие</Typography>
          <Grid
            container
            className={'ml-auto my-3 flex justify-end'}
            columns={{ xs: 4, sm: 12, lg: 12 }}
          >
            <Grid item xs={12} sm={4}>
              <SortSelect
                label={'Сортировать по'}
                defaultValue={activeSort.name}
                items={SORTITEMS}
                onChange={setSelect}
              />
            </Grid>
          </Grid>
          <Box className={'my-3'}>
            <TodoForm />
            <TodoList />
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Home;
