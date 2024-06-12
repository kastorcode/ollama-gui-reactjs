import styled from 'styled-components'

export const StyledColumnContainer = styled.div<{ isMobile : boolean }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  min-width: ${({ isMobile }) => isMobile ? '100vw' : '360px'};
  padding: 8px;
  padding-right: 0;
  width: 100%;
`

export const StyledRowContainer = styled.div<{ isMobile : boolean }>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow-x: ${({ isMobile }) => isMobile ? 'auto' : 'hidden'};
  width: 100%;
`