import styled from 'styled-components'

export const Container = styled.div`
position: fixed;
top: 0;
right: 0;
left: 0;
display: flex;
justify-content: space-between;
padding: 12px 16px;

a {
  text-decoration: none;
  color: #C8C3BC;
  font-weight: 700;
  
  &:hover {
    text-decoration: underline;
  }
}
`

export const Right = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 42px;
    height: 42px;
  }
`

export const Left = styled.div`
  display: flex;
  align-items: center;
`
