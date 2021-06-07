import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-height: 80px;

  margin-top: 20px;

  padding: 20px;
  border-radius: 10px;

  background: #b8d8d8;

  svg {
    margin-right: 20px;

    color: #4f6367;
  }

  :hover {
    cursor: pointer;
  }

  :first-child {
    margin-top: 0;
  }
`;

export const CheckBoxContainer = styled.div`
  margin-right: 20px;
`;

interface ITodoText {
  isComplete?: boolean;
}

export const TodoText = styled.p<ITodoText>`
  flex: 1;
  font-size: 18px;

  color: ${({ isComplete }) => (isComplete ? "#7A9E9F" : "#4F6367")};
  text-decoration: ${({ isComplete }) =>
    isComplete ? "line-through" : "none"};
`;
