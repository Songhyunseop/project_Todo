import Link from 'next/link';
import * as S from '../../styles/styledComponents/login.styles';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePw = (e) => {
    setPw(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const tokens = localStorage.getItem('accessToken') ?? '';

    try {
      const result = await axios.post(
        `http://localhost:5000/api/user/login`,
        {
          email,
          password: pw,
        },
        {
          headers: {
            Authorization: `Bearer ${tokens}`,
          },
        }
      );

      const token = result.data.token;
      localStorage.setItem('accessToken', token);

      router.push('/main');
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.LoginBox onSubmit={handleLogin}>
          <S.Title>로그인</S.Title>
          <S.InputBox>
            <S.Email>
              Email Address
              <S.Input onChange={changeEmail} />
            </S.Email>
            <S.PW>
              Password
              <S.Input onChange={changePw} type='password' />
            </S.PW>
            <S.Footer>
              <S.Btn>로그인</S.Btn>
              <S.GotoSignUp>
                <span style={{ marginRight: '9px' }}>계정이 없다면?</span>
                <Link style={{ textDecoration: 'none' }} href='/create'>
                  회원가입
                </Link>
              </S.GotoSignUp>
            </S.Footer>
          </S.InputBox>
        </S.LoginBox>
      </S.Wrapper>
    </>
  );
}
