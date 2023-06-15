import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

export default function TodoList({ todoList, deleteTodo, updateTodo }) {
  return todoList.length ? (
    <div data-testid = 'todo-list-component'>
    <ul>
      {todoList.map((t) =>
        t.edit ? (
          <EditTodo key={t.id} todo={t} updateTodo={updateTodo} />
        ) : (
          <TodoItem
            key={t.id}
            todo={t}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        )
      )}
    </ul>
    </div>
  ) : (
    <>
      <p>Aucune todo pour le moment</p>
    </>
  );
}
