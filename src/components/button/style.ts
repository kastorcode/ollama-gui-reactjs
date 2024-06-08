import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: #007aff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  padding: 12px 24px;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #005bb5;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.3);
    outline: none;
  }

  &:active {
    background-color: #004a99;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`