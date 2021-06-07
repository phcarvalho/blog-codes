import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 800px;

  border-radius: 20px;
  padding: 30px;

  background: #fff;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;

  margin-top: 20px;

  input {
    margin-right: 20px;
  }
`;

export const TodoListContainer = styled.div``;

export const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;

  overflow-y: auto;

  max-height: 100%;
`;
