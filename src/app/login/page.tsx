'use client';

import { Input }  from "../../components/atoms/Input";
import  PrimaryBtn  from "../../components/atoms/PrimaryBtn";
import NotLoginLayout from "../../components/templates/NotLoginLayout"

export default function LoginPage() {
  return (
    <NotLoginLayout>
        <div className="w-[500px] bg-white rounded-lg shadow-lg py-10">
            <form className="flex flex-col justify-center items-center gap-10">
            <h1 className="text-3xl text-lime-800 font-bold text-center">
                ログイン
            </h1>
            <div className="w-[80%]">
                <Input type="text" placeholder="メールアドレス"/>
            </div>
            <div className="w-[80%]">
                <Input type="text" placeholder="パスワード"/>
            </div>
            <PrimaryBtn>ログイン</PrimaryBtn>
            </form>
        </div>
    </NotLoginLayout>
  );
}
