export default function TopPage() {
    return (
        <div>
            <header>
                <div className="container mx-auto flex justify-between p-4">
                    <p className="logo">スケジュール管理</p>
                    <nav>
                        <ul className="flex gap-5 text-lime-800">
                            <li>利用説明</li>
                            <li>ログイン</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}