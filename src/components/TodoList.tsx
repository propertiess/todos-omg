import React, { FC, useMemo } from 'react';
import { useAppSelector } from '../store/hooks/useAppSelector';
import TodoItem from './TodoItem';
import moment from 'moment';

interface ITodListProps extends React.HTMLAttributes<HTMLDivElement> {}

const TodoList: FC<ITodListProps> = ({ ...other }) => {
  const todos = useAppSelector(state => state.todos);
  const sort = useAppSelector(state => state.sort);

  const sortedTodos = useMemo(() => {
    const [el] = sort.filter(el => el.active);

    if (el && el.name === 'title') {
      return [...todos].sort((x, y) => {
        //@ts-ignore
        return x[el.name].localeCompare(y[el.name]);
      });
    } else if (el.name === 'end') {
      return [...todos].sort((x, y) => {
        if (x.end === '0' && y.end !== '0') {
          return 0 - moment(y.end).valueOf();
        }

        if (y.end === '0' && x.end !== '0') {
          return 0 - moment(x.end).valueOf();
        }

        if (y.end === '0' && x.end === '0') {
          return 1;
        }

        return moment(x.end).valueOf() - moment(y.end).valueOf();
      });
    } else if (el.name === 'priority') {
      return [...todos].sort((x, y) => y.priority - x.priority);
    }

    return todos;
  }, [todos, sort]);

  return (
    <>
      <div {...other}>
        {sortedTodos &&
          sortedTodos.map(todo => <TodoItem key={todo.id} {...todo} />)}
      </div>
    </>
  );
};

export default TodoList;
