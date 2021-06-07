import React, { FormEvent, useState } from "react";
import { MdAdd } from "react-icons/md";
import { IconButton, Input, Line } from "../../components/Common";
import { Title } from "../../components/Common/Title";
import TodoItem from "./components/TodoItem";
import { ITodoItem } from "./interface";

import { Container, Form, TodoContainer, TodoList } from "./styles";

const TodoApp: React.FC = () => {
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);
  const [todoText, setTodoText] = useState("");
  const [nextTodoId, setNextTodoId] = useState(1);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todoText) {
      return;
    }

    const newTodoItems: ITodoItem[] = [
      ...todoItems,
      {
        id: nextTodoId,
        text: todoText,
        isComplete: false,
      },
    ];

    setTodoText("");
    setNextTodoId(nextTodoId + 1);
    setTodoItems(newTodoItems);
  };

  const handleItemClick = (id: number) => {
    const newTodoItems = todoItems.map((todoItem) => {
      if (todoItem.id === id) {
        return {
          ...todoItem,
          isComplete: !todoItem.isComplete,
        };
      }

      return todoItem;
    });

    setTodoItems(newTodoItems);
  };

  return (
    <Container>
      <TodoContainer>
        <header>
          <Title>Todo App</Title>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Input
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
              placeholder="What do you have to do?"
            />
            <IconButton type="submit">
              <MdAdd />
            </IconButton>
          </Form>
        </header>
        <Line />
        <TodoList>
          {todoItems.map((todoItem) => (
            <TodoItem
              key={`todo-item-${todoItem.id}`}
              text={todoItem.text}
              isComplete={todoItem.isComplete}
              onClick={() => handleItemClick(todoItem.id)}
            />
          ))}
        </TodoList>
      </TodoContainer>
    </Container>
  );
};

export default TodoApp;
