import { ReactNode } from 'react'

type PropsType = {
    children:ReactNode;
}

export default function NotLoginLayout({ children }: PropsType) {
    return(
        <div className="relative">
        <header className="bg-white leading-[50px] fixed top-0 left-0 right-0">
            <div className= "container mx-auto flex justify-between">
                <p className="logo">スケジュール管理</p>
                <nav>
                    <ul className="flex gap-5 text-lime-800">
                        <li>利用説明</li>
                        <li><a href="/login">ログイン</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <main  className="flex items-center justify-center h-screen bg-gradient-to-r from-lime-100 to-lime-200">
            {children}
        </main>
    </div>
    )

}