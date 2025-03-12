import NotLoginLayout from '../../components/templates/NotLoginLayout'
import PrimaryBtn from '../../components/atoms/PrimaryBtn'

export default function LoginPage(){
    return(
        <NotLoginLayout>
            <div className="w-[500px] bg-white rounded-lg shadow-lg py-12">
                <form className="flex flex-col items-center justify-center gap-10">
                    <h1 className="text-lime-800 font-bold text-3xl">ログイン</h1>
                    <div className="w-[80%]">
                        <input
                            name="email"
                            type="text"
                            className="w-full border-lime-800 border-4 border-solid p-2"
                            placeholder="メールアドレス"
                        />
                    </div>
                    <div className="w-[80%]">
                        <input
                            name="password"
                            type="text"
                            className="w-full border-lime-800 border-solid border-4 p-2"
                            placeholder="パスワード"
                        />
                    </div>
                    <PrimaryBtn onClick={()=> null}>ログイン</PrimaryBtn>
                </form>
            </div>
        </NotLoginLayout>
    )
}