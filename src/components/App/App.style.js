import styled from '@emotion/styled';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;

  h1 {
    background-color: rgba(250, 250, 250, 0.5);
    border-radius: 20px;
    color: black;
    font-size: 26px;
    margin: 20px;
    padding: 15px;
    text-transform: uppercase;
  }

  img {
    display: block;
    margin-bottom: 20px;
    height: clamp(300px, 100vh, 350px);
  }

  input {
    border-radius: 50px;
    letter-spacing: 0.7px;
    width: 200px;
    font-size: large;
    outline: none;
    text-align: center;
  }

  button {
    margin: auto 0 20px 0;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 50px;
    width: 200px;
    font-size: large;
    letter-spacing: 0.7px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;

  & > div {
    margin: 0.5em 2em;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;
