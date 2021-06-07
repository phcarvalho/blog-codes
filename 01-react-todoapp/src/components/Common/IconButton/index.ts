import styled from "styled-components";

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;
  border-radius: 50%;

  border: 0;
  outline: 0;

  background: #fe5f55;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);

  transition: background 0.3s;

  svg {
    color: #eef5db;
    width: 32px;
    height: 32px;
  }

  :hover {
    cursor: pointer;

    background: #fe4134;
  }
`;
