import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      font-size: 28px;
      margin-bottom: 24px;
    }

    input {
      background: #373839;
      border-radius: 5px;
      border: 2px solid #373840;
      padding: 10px;
      width: 100%;
      color: #C8C3BC;

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #C4C4C4;
      height: 50px;
      border-radius: 5px;
      border: 0;
      width: 100%;
      margin-top: 14px;
    }
  }
`
