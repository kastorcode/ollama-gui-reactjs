import styled from 'styled-components'

export const StyledTextArea = styled.textarea`
  background-color: rgba(255,255,255,0.25);
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: #fff;
  margin-right: 8px;
  outline: none;
  overflow-y: hidden;
  padding: 12px 16px;
  resize: none;
  transition: border-color 0.3s, box-shadow 0.3s;
  width: 100%;

  &:focus {
    border-color: #007aff;
    box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.2);
  }
`