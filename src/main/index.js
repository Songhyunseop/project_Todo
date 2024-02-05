import { useEffect, useState } from 'react';
import * as S from '../../styles/styledComponents/main.styles';
import AuthLogin from '../../auth/withAuth';
import { api } from '@/pages/api';
require('dotenv').config();

function Main() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  const getTasks = async () => {
    const response = await api.get('/tasks');

    setTodoList(response?.data?.data);
  };

  const saveInputTask = (e) => {
    setTodoValue(e.target.value);
  };

  // Optimistc UI (낙관적 UI) 로직
  const newTodo = (e) => {
    const checked = todoList.filter((el) => el._id === e.target.id);

    const updatedList = todoList.map((el) =>
      el._id === checked[0]._id
        ? { ...el, isComplete: !el.isComplete }
        : { ...el }
    );

    setTodoList(updatedList);
  };

  const toggleTask = async (e) => {
    newTodo(e);

    const result2 = await api.put(`/tasks/${e.target.id}`, {
      isComplete: e.target.textContent === '진행' ? true : false,
    });

    getTasks();
  };

  const uploadTask = async () => {
    try {
      const result = await api.post('/tasks', {
        task: todoValue,
        isComplete: false,
      });
    } catch (error) {
      alert('할 일을 입력하세요');
    }
    setTodoValue('');
    getTasks();
  };

  const deleteTask = async (e) => {
    const result3 = await api.delete(`/tasks/${e.target.id}`);

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
          {todoList.length <= 0 ? (
            <h2 style={{ color: 'rgba(2, 232, 217, 0.82)' }}>
              There is Nothing
            </h2>
          ) : (
            todoList.map((el, idx) => (
              <S.TodoList key={idx}>
                <S.Task>{el.task}</S.Task>
                <S.Buttons>
                  <S.Writer>{el.writer.name}</S.Writer>
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

export default AuthLogin(Main);
