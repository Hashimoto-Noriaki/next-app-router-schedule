'use client';

import { ChangeEvent,useState } from 'react'
import { Input }  from "../../components/atoms/Input";
import  PrimaryBtn  from "../../components/atoms/PrimaryBtn";
import NotLoginLayout from "../../components/templates/NotLoginLayout"
import { LoginInfoType } from "../../types/login"

export default function LoginPage() {
    const [loginInfo,setLoginInfo] = useState<LoginInfoType>({
        email:"",
        password:"",
    })

    const changeLoginInfo = (event: ChangeEvent<HTMLInputElement>) => {//changeLoginInfo 関数は、React の ChangeEvent を受け取り、フォーム内の入力フィールドの値を更新するために使用
        const { name, value } = event.target;//イベントから入力情報を取得：event.targetを使用して、イベントが発生した入力要素を取得し、name属性と現在のvalueを取得
        setLoginInfo({...loginInfo,[name]:value})//setLoginInfo関数を使用して、現在のloginInfoステートを更新。ここで、スプレッド構文を用いて既存のステートを展開し、[name]: value で特定のフィールドを更新
    }

    return (
        <NotLoginLayout>
            <div className="w-[500px] bg-white rounded-lg shadow-lg py-10">
                <form className="flex flex-col justify-center items-center gap-10">
                <h1 className="text-3xl text-lime-800 font-bold text-center">
                    ログイン
                </h1>
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
                        type="text"
                        placeholder="パスワード"
                        value={LoginInfo.password}
                        onChange={changeLoginInfo}
                    />
                </div>
                <PrimaryBtn onClick={()=> null}>ログイン</PrimaryBtn>
                </form>
            </div>
        </NotLoginLayout>
    );
}
