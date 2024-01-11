import { useEffect, useState } from 'react';
import * as S from '../../styles/styledComponents/main.styles';
import axios from 'axios';
require('dotenv').config();

export default function Main() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  const getTasks = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_PROXY}/api/tasks`
    );
    setTodoList(response.data.data);
  };

  const saveInputTask = (e) => {
    setTodoValue(e.target.value);
  };

  const toggleTask = async (e) => {
    const result2 = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_PROXY}/api/tasks/${e.target.id}`,
      { isComplete: e.target.textContent === '진행' ? true : false }
    );

    getTasks();
  };

  const uploadTask = async () => {
    try {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_PROXY}/api/tasks`,
        {
          task: todoValue,
          isComplete: false,
        }
      );
    } catch (error) {
      alert('할 일을 입력하세요');
    }
    setTodoValue('');
    getTasks();
  };

  const deleteTask = async (e) => {
    const result3 = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_PROXY}/api/tasks/${e.target.id}`
    );
    getTasks();
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.Body>
          <S.WriteTask>
            <S.TaskInput value={todoValue} onChange={saveInputTask} />
            <S.AddBtn onClick={uploadTask}>추가</S.AddBtn>
          </S.WriteTask>
          {todoList.length < 0 ? (
            <h2>There is Nothing</h2>
          ) : (
            todoList.map((el, idx) => (
              <S.TodoList key={idx}>
                <S.Task>{el.task}</S.Task>
                <S.Buttons>
                  <S.Delete id={el._id} onClick={deleteTask}>
                    삭제
                  </S.Delete>
                  <S.Status id={el._id} onClick={toggleTask}>
                    {el.isComplete ? `끝남` : '진행'}
                  </S.Status>
                </S.Buttons>
              </S.TodoList>
            ))
          )}
        </S.Body>
      </S.Wrapper>
    </>
  );
}
