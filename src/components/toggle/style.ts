import styled from 'styled-components'

export const Ball = styled.span<{ checked : boolean }>`
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  height: 26px;
  left: 4px;
  position: absolute;
  top: 4px;
  transform: translateX(${({ checked }) => (checked ? '26px' : '0')});
  transition: transform 0.3s ease;
  width: 26px;
`

export const Checkbox = styled.input`
  display: none;
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Label = styled.label<{ checked : boolean }>`
  background-color: ${({ checked }) => (checked ? '#007aff' : '#ccc')};
  border-radius: 34px;
  cursor: pointer;
  display: block;
  height: 100%;
  position: relative;
  transition: background-color 0.3s ease;
  width: 100%;

  &:before {
    background-color: #f0f0f5;
    border-radius: inherit;
    content: '';
    height: 100%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) scale(${({ checked }) => (checked ? 0 : 1.1)});
    transition: transform 0.3s ease;
    width: 100%;
  }
`

export const ToggleContainer = styled.div`
  height: 34px;
  position: relative;
  width: 60px;
`