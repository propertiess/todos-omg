import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../models/Todo';

const initialState: Todo[] = [];

const TodosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<Todo>) => {
      state.unshift(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) =>
      state.filter(todo => todo.id !== action.payload),
    setChecked: (state, action: PayloadAction<string>) => {
      const i = state.findIndex(todo => todo.id === action.payload);
      state[i].checked = !state[i].checked;
    }
  }
});

export const { createTodo, removeTodo, setChecked } = TodosSlice.actions;
export default TodosSlice.reducer;
