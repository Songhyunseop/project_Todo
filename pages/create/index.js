import axios from 'axios';
import * as S from '../../styles/styledComponents/create.styles';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignUp() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [secPw, setSecPw] = useState('');

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePw = (e) => {
    setPw(e.target.value);
  };
  const changeSecPw = (e) => {
    setSecPw(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (pw !== secPw) throw new Error('Error: 패스워드가 일치하지 않습니다');

      const result = await api.post('/user', {
        name,
        email,
        password: pw,
      });

      alert('환영합니다! 다시 로그인 해주세요');
      router.push('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.CreateBox onSubmit={handleSubmit}>
          <S.Title>회원가입</S.Title>
          <S.InputBox>
            <S.Name>
              Name
              <S.Input onChange={changeName} />
            </S.Name>
            <S.Email>
              Email Address
              <S.Input onChange={changeEmail} />
            </S.Email>
            <S.PW>
              Password
              <S.Input type='password' onChange={changePw} />
            </S.PW>
            <S.PW>
              Check Password
              <S.Input type='password' onChange={changeSecPw} />
            </S.PW>
            <S.Btn>회원가입</S.Btn>
          </S.InputBox>
        </S.CreateBox>
      </S.Wrapper>
    </>
  );
}
