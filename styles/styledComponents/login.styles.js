import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: rgba(204, 255, 255, 0.3);
  min-height: 100vh;
`;

export const LoginBox = styled.form`
  border: 2px solid rgba(202, 235, 235);
  background-color: white;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 500px;
  height: 250px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 42px;
  color: rgba(202, 235, 235);
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Email = styled.label`
  color: rgba(202, 235, 235);
  height: 55px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PW = styled.label`
  color: rgba(202, 235, 235);
  height: 55px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Input = styled.input`
  height: 30px;
`;

export const Footer = styled.footer`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Btn = styled.button`
  width: 80px;
  height: 30px;
  background-color: lightblue;
  color: white;
  font-size: 14px;
  border-radius: 5px;
`;

export const GotoSignUp = styled.label``;
