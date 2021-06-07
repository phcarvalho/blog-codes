import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

import { Container, TodoText } from "./styles";

interface ITodoItem {
  text: string;
  isComplete?: boolean;
  onClick: () => void;
}

const TodoItem: React.FC<ITodoItem> = ({ text, isComplete, onClick }) => {
  return (
    <Container onClick={() => onClick()}>
      {isComplete ? (
        <MdCheckBox size={24} />
      ) : (
        <MdCheckBoxOutlineBlank size={24} />
      )}
      <TodoText isComplete={isComplete}>{text}</TodoText>
    </Container>
  );
};

export default TodoItem;
