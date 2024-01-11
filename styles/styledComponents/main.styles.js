import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: rgba(2, 232, 217, 0.22);
  height: 1000px;
`;

export const Body = styled.div`
  padding: 50px 200px 0px 200px;
`;

export const WriteTask = styled.div`
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
`;

export const TodoList = styled.div`
  margin: 20px 0px;
  height: 50px;
  border: 1px solid cornflowerblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  color: rgba(0, 0, 0, 0.65);
`;

export const Task = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Buttons = styled.div`
  width: 9%;
  display: flex;
  justify-content: space-between;
`;

export const Delete = styled.button`
  background-color: skyblue;
  opacity: 0.6;
`;

export const Status = styled.button``;

export const TaskInput = styled.input`
  height: 35px;
  width: 80%;
  font-size: 20px;
  outline: none;
  color: rgba(0, 0, 0, 0.5);
`;

export const AddBtn = styled.button`
  width: 120px;
  height: 35px;
  background-color: aliceblue;
  border-color: aliceblue;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
`;
