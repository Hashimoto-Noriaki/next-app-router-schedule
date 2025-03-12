import { ReactNode }from 'react'

type PropsType = {
    children:ReactNode;
}

export default function NotLoginLayout({ children }: PropsType){
    return(
        <div className="relative">
            <header className="bg-white leading-[50px] fixed top-0 right-0 left-0">
                <div className="container mx-auto flex justify-between">
                    <p className="logo">スケジュール管理App</p>
                    <nav>
                        <ul className="flex gap-5">
                            <li className="text-lime-800">利用説明</li>
                            <li className="text-lime-800">ログイン</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="pt-[50px] h-screen bg-gradient-to-r from-lime-100 to-lime-200 flex flex-col items-center justify-center">
                {children}
            </main>
        </div>
    )

} 