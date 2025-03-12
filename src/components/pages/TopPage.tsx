
export default function TopPage() {
  return (
    <div className="relative">
        <header className="bg-white leading-[50px] fixed top-0 left-0 right-0">
            <div className= "container mx-auto flex justify-between">
                <p className="logo">スケジュール管理</p>
                <nav>
                    <ul className="flex gap-5 text-lime-800">
                        <li>利用説明</li>
                        <li>ログイン</li>
                    </ul>
                </nav>
            </div>
        </header>
        <main className="pt-[50px] h-screen bg-gradient-to-r from-lime-100 to-lime-200 flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="logo text-7xl">スケジュール管理APP</h1>
                <p className="text-5xl pt-[10vh]">
                    スケジュールを管理します。
                </p>
                <div className="pt-[20vh]">
                    <button className="bg-lime-800 text-white p-4 rounded-md">
                        ログイン
                    </button>
                </div>
            </div>
        </main>
    </div>
    );
};
