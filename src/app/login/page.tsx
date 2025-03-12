import NotLoginLayout from '../../components/templates/NotLoginLayout'
import PrimaryBtn from '../../components/atoms/PrimaryBtn'
import { Input } from '../../components/atoms/Input'

export default function LoginPage(){
    return(
        <NotLoginLayout>
            <div className="w-[500px] bg-white rounded-lg shadow-lg py-12">
                <form className="flex flex-col items-center justify-center gap-10">
                    <h1 className="text-lime-800 font-bold text-3xl">ログイン</h1>
                    <div className="w-[80%]">
                        <Input
                            name="email"
                            type="text"
                            placeholder="メールアドレス"
                        />
                    </div>
                    <div className="w-[80%]">
                        <Input
                            name="password"
                            type="text"
                            placeholder="パスワード"
                        />
                    </div>
                    <PrimaryBtn onClick={()=> null}>ログイン</PrimaryBtn>
                </form>
            </div>
        </NotLoginLayout>
    )
}