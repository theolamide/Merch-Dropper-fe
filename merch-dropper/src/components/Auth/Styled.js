import styled from 'styled-components';

export const StyledHeader = styled.h2`
    font-weight: bold;
    color: #fff;
`;

export const SignUpBox = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:space-around;
  align-items:center;
  height: 70vh;
  width: 30vw;
  border-radius: 3px;
  background: #fd7e14;
  margin: 2% auto;
  border: 2px solid rgb(33,64,73);
  box-shadow: 3px 4px 3px 0px rgba(0,0,0,0.59);
`
export const StyledForm = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  height: 65%;
  width: 90%;
`
export const StyledInput = styled.input`
  height: 5vh;
  border-radius: 5px;
  padding: 1%;
  margin: .5%;
  font-size: 0.8em;
  background:#f5f5f5;
`
export const StyledButton = styled.button`
  width: 40%;
  font-size: 1.2em;
  padding: 2% 0;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  margin: 5% auto;
  margin-bottom: 10%;
`;