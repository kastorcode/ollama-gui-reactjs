import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ButtonsContainer = styled.div`
  display: flex;
  height: fit-content;
  justify-content: space-between;
  width: 100%;
`

export const Chat = styled(Link)`
  border-radius: 4px;
  color: rgba(255,255,255,0.25);
  cursor: pointer;
  margin-bottom: 4px;
  padding: 4px;
  transition: 0.3s;

  &:hover {
    background-color: rgba(255,255,255,0.25);
    box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.2);
    color: #fff;
  }
`

export const ChatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const Container = styled.div`
  background-color: rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  width: 20%;
`