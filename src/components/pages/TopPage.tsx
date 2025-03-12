export default function TopPage() {
    return (
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
                <div className="text-center">
                    <h1 className="logo text-7xl">スケジュール管理App</h1>
                    <p className="text-3xl pt-[20vh]">スケジュールを管理します。</p>
                </div>
                <div className="pt-[10vh]">
                    <button className="bg-lime-800 text-white p-4 rounded-lg text-lg">
                        ログイン
                    </button>
                </div>
            </main>
        </div>
    )
}