import NotLoginLayout  from '../templates/NotLoginLayout'
import PrimaryBtn from '../atoms/PrimaryBtn'

export default function TopPage() {
    return (
        <NotLoginLayout>
            <main className="pt-[50px] h-screen bg-gradient-to-r from-lime-100 to-lime-200 flex flex-col items-center justify-center">
                <div className="text-center">
                    <h1 className="logo text-7xl">スケジュール管理App</h1>
                    <p className="pt-[10vh] text-5xl">スケジュールを管理します。</p>
                </div>
                <div className="pt-[10vh]">
                    <PrimaryBtn>ログイン</PrimaryBtn>
                </div>
            </main>
        </NotLoginLayout>
    )
}