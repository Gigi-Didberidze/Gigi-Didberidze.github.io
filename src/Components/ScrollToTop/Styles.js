import styled from 'styled-components';

export const Button = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 0px;
  right: 0px;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  transition: opacity 0.4s;

  &:hover {
    opacity: 0.8;
  }
`;
