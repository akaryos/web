import styled, { css } from 'styled-components'

interface ContainerProps {
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  label {
    display: block;
    margin-bottom: 5px;
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;

    span {
      text-transform: none;
      color: #c43;
      font-style: italic;
      font-size: 11px;
    }
  }

  input {
    font-size: 14px;
    background: #373839;
    border-radius: 5px;
    border: 1px solid #373840;
    padding: 10px;
    width: 100%;
    color: #C8C3BC;

    &:focus {
      border: 1px solid #7289DA;
    }

    ${(props) =>
    props.isErrored &&
    css`
      border-color: #c43;
    `}
  }

  &:not(:last-child) {
    margin-top: 16px;
  }
`
