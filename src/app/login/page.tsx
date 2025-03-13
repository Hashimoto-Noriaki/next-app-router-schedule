'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '../../components/atoms/Input';
import PrimaryBtn from '../../components/atoms/PrimaryBtn';
import NotLoginLayout from '../../components/templates/NotLoginLayout';
import { LoginInfoType } from '../../types/login';
import { login } from '../../api/login';
import { useUserStore } from '../../store/useUserStore';

export default function LoginPage() {
  const [loginInfo, setLoginInfo] = useState<LoginInfoType>({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const setUser = useUserStore((state) => state.setUser);
  const router = useRouter();

  const changeLoginInfo = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    try {
      const resUser = await login(loginInfo);
      setUser({ id: resUser.id, name: resUser.name });
      router.push('/calendar');
    } catch {
      setErrorMessage('ログインに失敗しました');
    }
  };

  return (
    <NotLoginLayout>
      <div className="w-[500px] bg-white rounded-lg shadow-lg py-10">
        <form
          className="flex flex-col justify-center items-center gap-10"
          onSubmit={handleLogin}
        >
          <h1 className="text-3xl text-lime-800 font-bold text-center">
            ログイン
          </h1>
          {errorMessage && (
            <div className="p-5 bg-red-500 text-white w-[80%] rounded-lg">
              {errorMessage}
            </div>
          )}
          <div className="w-[80%]">
            <Input
              name="email"
              type="text"
              placeholder="メールアドレス"
              value={loginInfo.email}
              onChange={changeLoginInfo}
            />
          </div>
          <div className="w-[80%]">
            <Input
              name="password"
              type="password"
              placeholder="パスワード"
              value={loginInfo.password}
              onChange={changeLoginInfo}
            />
          </div>
          <PrimaryBtn onClick={() => null}>ログイン</PrimaryBtn>
        </form>
      </div>
    </NotLoginLayout>
  );
}
