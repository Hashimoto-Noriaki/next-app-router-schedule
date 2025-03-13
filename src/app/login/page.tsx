'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '../../components/atoms/Input';
import PrimaryBtn from '../../components/atoms/PrimaryBtn';
import NotLoginLayout from '../../components/templates/NotLoginLayout';
import { LoginInfoType } from '../../types/login';
import { login } from '../../api/login';

export default function LoginPage() {
  const [loginInfo, setLoginInfo] = useState<LoginInfoType>({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();

  const changeLoginInfo = (event: ChangeEvent<HTMLInputElement>) => {///changeLoginInfo 関数は、React の ChangeEvent を受け取り、フォーム内の入力フィールドの値を更新するために使用
    const { name, value } = event.target;////イベントから入力情報を取得：event.targetを使用して、イベントが発生した入力要素を取得し、name属性と現在のvalueを取得
    setLoginInfo({ ...loginInfo, [name]: value });////setLoginInfo関数を使用して、現在のloginInfoステートを更新。ここで、スプレッド構文を用いて既存のステートを展開し、[name]: value で特定のフィールドを更新
  };

  // ユーザーがログインフォームを送信した際に呼び出されるイベントハンドラー
  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // フォームのデフォルトの送信動作を防ぎ、ページのリロードを防ぎ、JavaScript内で独自の処理を行う
    setErrorMessage(''); // エラーメッセージの状態を初期化
    try {
      await login(loginInfo);
      router.push('/sample'); // ログイン成功後に遷移するページのパスを指定(今回はSampleにする)
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
          {errorMessage !== '' && (
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
