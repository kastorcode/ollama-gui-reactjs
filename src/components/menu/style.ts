import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ButtonsContainer = styled.div`
  display: flex;
  height: fit-content;
  justify-content: space-between;
  padding: 8px;
  width: 100%;
`

export const Chat = styled(Link)`
  border-radius: 4px;
  color: rgba(255,255,255,0.25);
  cursor: pointer;
  display: block;
  margin-bottom: 4px;
  overflow: hidden;
  padding: 4px;
  text-overflow: ellipsis;
  transition: 0.3s;
  white-space: nowrap;
  width: 100%;

  &:hover {
    background-color: rgba(255,255,255,0.25);
    box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.2);
    color: #fff;
  }
`

export const ChatsContainer = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 8px;
  width: 100%;
`

export const Container = styled.div<{ isMobile : boolean }>`
  background-color: rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: ${({ isMobile }) => isMobile ? '100vw' : '20%'};
`